
import { initTranscribeLanguage } from './js/languageLoaderUsage.js';
import { initRecording } from './js/recording.js';
import { initNoteGeneration } from './js/noteGeneration.js';

function initApiKeyPersistence(){
  const input = document.getElementById('apiKeyInput');
  const stored = sessionStorage.getItem('openai_api_key') || localStorage.getItem('openai_api_key');
  if (stored && input) input.value = stored;
  input?.addEventListener('input', (e)=>{
    const v = e.target.value.trim();
    sessionStorage.setItem('openai_api_key', v);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTranscribeLanguage?.();
  initRecording?.();
  initNoteGeneration?.();
  initApiKeyPersistence();
});
