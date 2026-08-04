/*
 *  Copyright 2024 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import i18next from './LocalUtil';

const LOCALE_LOADERS: Record<
  string,
  () => Promise<{ default: Record<string, unknown> }>
> = {
  'en-US': () => import('../../locale/languages/en-us.json', { with: { type: 'json' } }),
  'ko-KR': () => import('../../locale/languages/ko-kr.json', { with: { type: 'json' } }),
  'fr-FR': () => import('../../locale/languages/fr-fr.json', { with: { type: 'json' } }),
  'zh-CN': () => import('../../locale/languages/zh-cn.json', { with: { type: 'json' } }),
  'zh-TW': () => import('../../locale/languages/zh-tw.json', { with: { type: 'json' } }),
  'ja-JP': () => import('../../locale/languages/ja-jp.json', { with: { type: 'json' } }),
  'pt-BR': () => import('../../locale/languages/pt-br.json', { with: { type: 'json' } }),
  'pt-PT': () => import('../../locale/languages/pt-pt.json', { with: { type: 'json' } }),
  'es-ES': () => import('../../locale/languages/es-es.json', { with: { type: 'json' } }),
  'gl-ES': () => import('../../locale/languages/gl-es.json', { with: { type: 'json' } }),
  'ru-RU': () => import('../../locale/languages/ru-ru.json', { with: { type: 'json' } }),
  'de-DE': () => import('../../locale/languages/de-de.json', { with: { type: 'json' } }),
  'he-HE': () => import('../../locale/languages/he-he.json', { with: { type: 'json' } }),
  'nl-NL': () => import('../../locale/languages/nl-nl.json', { with: { type: 'json' } }),
  'pr-PR': () => import('../../locale/languages/pr-pr.json', { with: { type: 'json' } }),
  'th-TH': () => import('../../locale/languages/th-th.json', { with: { type: 'json' } }),
  'mr-IN': () => import('../../locale/languages/mr-in.json', { with: { type: 'json' } }),
  'tr-TR': () => import('../../locale/languages/tr-tr.json', { with: { type: 'json' } }),
  'ar-SA': () => import('../../locale/languages/ar-sa.json', { with: { type: 'json' } }),
  'sv-SE': () => import('../../locale/languages/sv-se.json', { with: { type: 'json' } }),
};

class LocalUtilClassBase {
  private static _instance: LocalUtilClassBase;

  async loadLocales(locale: string): Promise<void> {
    if (i18next.hasResourceBundle(locale, 'translation')) {
      return;
    }

    const loader = LOCALE_LOADERS[locale];
    if (!loader) {
      return;
    }

    const translations = await loader();
    i18next.addResourceBundle(
      locale,
      'translation',
      translations.default,
      true
    );
  }

  static getInstance(): LocalUtilClassBase {
    if (!LocalUtilClassBase._instance) {
      LocalUtilClassBase._instance = new LocalUtilClassBase();
    }

    return LocalUtilClassBase._instance;
  }
}

const localUtilClassBase = LocalUtilClassBase.getInstance();

export { LocalUtilClassBase };

export default localUtilClassBase;
