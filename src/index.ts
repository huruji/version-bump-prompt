// tslint:disable: no-default-export
import { selectVersion, updateVersion, versionBump } from "./version-bump";

// Exprot the external type definitions as named exports
export { ReleaseType } from "./release-type";
export * from "./types/version-bump-options";
export * from "./types/version-bump-results";
export * from "./types/version-bump-progress";

// Export `versionBump` as a named export and the default export
export { versionBump, selectVersion, updateVersion };
export default versionBump;

// CommonJS default export hack
if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = Object.assign(module.exports.default, module.exports);  // tslint:disable-line: no-unsafe-any
}
