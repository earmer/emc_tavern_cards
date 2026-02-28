import { waitUntil } from 'async-wait-until';
import { createPinia } from 'pinia';
import { createApp, type App } from 'vue';
import AppComponent from './App.vue';
import './global.css';

$(async () => {
  await waitGlobalInitialized('Mvu');
  await waitUntil(() => _.has(getVariables({ type: 'message' }), 'stat_data'));

  const root = document.getElementById('app')!;
  let vueApp: App | null = null;

  function mount() {
    if (vueApp) return;
    vueApp = createApp(AppComponent).use(createPinia());
    vueApp.mount(root);
  }

  function unmount() {
    if (!vueApp) return;
    vueApp.unmount();
    vueApp = null;
  }

  let unmountTimer: ReturnType<typeof setTimeout> | null = null;

  function scheduledUnmount() {
    if (unmountTimer !== null) return;
    unmountTimer = setTimeout(() => {
      unmount();
      unmountTimer = null;
    }, 30_000); // 离开视口 30s 后才真正卸载
  }

  function cancelUnmount() {
    if (unmountTimer !== null) {
      clearTimeout(unmountTimer);
      unmountTimer = null;
    }
  }

  function onIntersect(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      cancelUnmount();
      mount();
    } else {
      scheduledUnmount();
    }
  }

  // 尝试从父页面上下文创建 Observer（同源时 rootMargin 生效）
  // fallback 到 iframe 自身的 Observer
  const iframe = window.frameElement as HTMLIFrameElement | null;
  const ObserverCtor: typeof IntersectionObserver = iframe
    ? ((window.parent as any).IntersectionObserver ?? IntersectionObserver)
    : IntersectionObserver;
  const target = iframe ?? document.getElementById('app')!;

  const observer = new ObserverCtor(onIntersect, { threshold: 0 });
  observer.observe(target);
});
