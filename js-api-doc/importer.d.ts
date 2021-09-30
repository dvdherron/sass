import {URL} from 'url';

import {Syntax} from './options';
import {PromiseOr} from './util/promise_or';

export interface FileImporter<
  sync extends 'sync' | 'async' = 'sync' | 'async'
> {
  findFileUrl(
    url: string,
    options: {fromImport: boolean}
  ): PromiseOr<FileImporterResult | null, sync>;

  canonicalize?: never;
}

export interface FileImporterResult {
  url: URL;

  sourceMapUrl?: URL;
}

export interface Importer<sync extends 'sync' | 'async' = 'sync' | 'async'> {
  canonicalize(
    url: string,
    options: {fromImport: boolean}
  ): PromiseOr<URL | null, sync>;

  load(canonicalUrl: URL): PromiseOr<ImporterResult | null, sync>;

  findFileUrl?: never;
}

export interface ImporterResult {
  css: string;

  syntax: Syntax;

  sourceMapUrl?: URL;
}
