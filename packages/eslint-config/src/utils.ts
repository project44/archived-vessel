import fs from 'fs';
import path from 'path';
import type { ProjectReference } from 'typescript';

export const ROOT = process.env.BEEMO_ROOT ?? process.cwd();
export const PACKAGE_JSON_PATH = path.join(ROOT, 'package.json');
export const TSCONFIG_JSON_PATH = path.join(ROOT, 'tsconfig.json');

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
