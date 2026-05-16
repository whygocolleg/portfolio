'use client';

import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 text-text-main placeholder:text-text-variant/50 focus:outline-none focus:border-neon-purple/50 transition-colors text-sm';

  return (
    <form onSubmit={handleSubmit} className="glass-surface rounded-xl p-8 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-text-variant mb-2">이름</label>
          <input name="name" value={form.name} onChange={handleChange} required placeholder="홍길동" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-text-variant mb-2">이메일</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-text-variant mb-2">제목</label>
        <input name="subject" value={form.subject} onChange={handleChange} required placeholder="문의 제목" className={inputClass} />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-text-variant mb-2">메시지</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={6} placeholder="문의 내용을 입력해주세요..." className={`${inputClass} resize-none`} />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-neon-purple hover:bg-neon-purple-dim disabled:opacity-50 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(188,19,254,0.4)] hover:shadow-[0_0_30px_rgba(188,19,254,0.7)]"
      >
        {status === 'sending' ? '전송 중...' : '메시지 보내기'}
      </button>

      {status === 'success' && (
        <p className="text-center text-electric-cyan text-sm">✅ 메시지가 성공적으로 전송되었습니다!</p>
      )}
      {status === 'error' && (
        <p className="text-center text-error text-sm">전송에 실패했습니다. 다시 시도해주세요.</p>
      )}
    </form>
  );
}
