import React, { useState } from 'react';
import { Check, Copy, MessageCircle } from 'lucide-react';
import type { Lang } from '../data/types';
import { WHATSAPP_TEMPLATES } from '../data/cookbookData';
import { getWhatsAppDraft } from '../utils/cookbook';

interface WhatsAppTemplatesPanelProps {
  lang: Lang;
}

export const WhatsAppTemplatesPanel: React.FC<WhatsAppTemplatesPanelProps> = ({ lang }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (templateId: string, text: string) => {
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch {
      copied = false;
    }

    if (!copied) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.top = '-9999px';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        copied = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch {
        copied = false;
      }
    }

    if (copied) {
      setCopiedId(templateId);
      setTimeout(() => {
        setCopiedId((current) => (current === templateId ? null : current));
      }, 2500);
    }
  };

  return (
    <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--sage-soft)] text-[var(--sage)]">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-semibold text-[var(--sage)]">
            {lang === 'id' ? 'Template siap pakai' : 'Ready-to-use templates'}
          </p>
          <h4 className="mt-0.5 font-display text-lg sm:text-xl font-medium text-[var(--ink)]">
            {lang === 'id'
              ? 'Contoh pesan WhatsApp singkat ke keluarga'
              : 'Short WhatsApp message templates for family'}
          </h4>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {lang === 'id'
              ? 'Ketuk Salin pesan, tempel ke WhatsApp, lalu isi bagian dalam tanda kurung siku [ ].'
              : 'Tap Copy message, paste into WhatsApp, and fill in the parts inside square brackets [ ].'}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3.5 md:grid-cols-2">
        {WHATSAPP_TEMPLATES.map((tpl) => {
          const draft = getWhatsAppDraft(tpl, lang);
          const isCopied = copiedId === tpl.id;
          return (
              <div
                key={tpl.id}
                className="flex flex-col justify-between rounded-xl bg-[var(--surface-subtle)]/75 p-4"
              >
                <div>
                  <h5 className="font-display text-base font-medium text-[var(--ink)]">
                    {lang === 'id' ? tpl.title_id : tpl.title_en}
                  </h5>
                  <p className="mt-0.5 text-xs text-[var(--muted)]">
                    {lang === 'id' ? tpl.context_id : tpl.context_en}
                  </p>
                  <p className="mt-3 rounded-lg bg-[var(--surface)] p-3 text-sm leading-relaxed text-[var(--ink)]">
                    {draft}
                  </p>
                </div>

              <div className="mt-3.5">
                <button
                  type="button"
                  onClick={() => handleCopy(tpl.id, draft)}
                  data-copy-template={tpl.id}
                  className={`inline-flex min-h-[44px] items-center gap-2 rounded-xl border px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    isCopied
                      ? 'border-[var(--sage)] bg-[var(--sage)] text-white dark:text-[#102016]'
                      : 'border-[var(--line-strong)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--sage)] hover:text-[var(--sage)]'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{lang === 'id' ? 'Tersalin!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{lang === 'id' ? 'Salin pesan' : 'Copy message'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
