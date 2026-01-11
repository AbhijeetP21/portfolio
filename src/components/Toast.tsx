'use client';

import { useToast } from '@/contexts/ToastContext';

export function Toast() {
  const { toastMessage, showToast } = useToast();

  return (
    <div
      id="toast"
      className={`fixed bottom-5 right-5 bg-slate-950 dark:bg-slate-800 text-white px-6 py-3 rounded-lg shadow-xl transform transition-all duration-300 border border-primary-500/30 flex items-center gap-3 z-50 ${
        showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <i className="fa-solid fa-circle-check text-green-400"></i>
      <span id="toast-msg">{toastMessage || 'Action Successful'}</span>
    </div>
  );
}
