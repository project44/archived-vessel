import { PACKAGE_JSON_PATH, TSCONFIG_JSON_PATH } from './constants';
import fs from 'fs';
import type { ProjectReference } from 'typescript';

export interface PackageJSON {
  engines?: { node?: string };
}

export interface TSConfigJSON {
  references?: ProjectReference[];
}

let packageJson: PackageJSON;
let tsconfigJson: TSConfigJSON;

export function parseJSON<T>(filePath: string): T {
  const content = fs
    .readFileSync(filePath, 'utf8')
    .split('\n')
    // Remove comments from JSON files
    .filter(line => !/^\s*(#|\/)/.test(line))
    .join('\n');

  return JSON.parse(content) as T;
}

export function getRootPackageJSON(): PackageJSON {
  if (packageJson === undefined) {
    packageJson = parseJSON(PACKAGE_JSON_PATH);
  }

  return packageJson;
}

export function getRootTSConfig(): TSConfigJSON {
  if (tsconfigJson === undefined) {
    tsconfigJson = parseJSON(TSCONFIG_JSON_PATH);
  }

  return tsconfigJson;
}

export function getRootProjectReferences(): ProjectReference[] | undefined {
  return getRootTSConfig().references;
}
