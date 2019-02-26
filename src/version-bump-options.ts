
/**
 * Options for the `versionBump()` function.
 */
export interface VersionBumpOptions {
  /**
   * The release version or type. Can be one of the following:
   *
   * - The new version number (e.g. "1.23.456")
   * - A release type (e.g. "major", "minor", "patch", "prerelease", etc.)
   * - "prompt" to prompt the user for the version number
   *
   * Defaults to "prompt".
   */
  release?: string;

  /**
   * The prerelease type (e.g. "alpha", "beta", "next").
   *
   * Defaults to "beta".
   */
  preid?: string;

  /**
   * Indicates whether to create a git commit. Can be set to a custom commit message string
   * or `true` to use "release v" (the version number will be appended).
   *
   * Defaults to `false`.
   */
  commit?: boolean | string;

  /**
   * Indicates whether to tag the git commit. Can be set to a custom tag string
   * or `true` to use "v" (the version number will be appended).
   *
   * Defaults to `false`.
   */
  tag?: boolean | string;

  /**
   * Indicates whether to push the git commit and tag.
   *
   * Defaults to `false`.
   */
  push?: boolean;

  /**
   * Indicates whether the git commit should include ALL files (`git commit -a`)
   * rather than just the files that were modified by `versionBump()`.
   *
   * Defaults to `false`.
   */
  all?: boolean;

  /**
   * Indicates whether to bypass git commit hooks (`git commit --noverify`).
   *
   * Defaults to `false`.
   */
  noVerify?: boolean;

  /**
   * The files to be updated. For certain known files ("package.json", "bower.json", etc.)
   * `versionBump()` will explicitly update the file's version number.  For other files
   * (ReadMe files, config files, source code, etc.) it will simply do a global replacement
   * of the old version number with the new version number.
   *
   * Defaults to ["package.json", "package-lock.json"]
   */
  files?: string[];

  /**
   * The working directory, which is used as the basis for locating all files.
   *
   * Defaults to `process.cwd()`
   */
  cwd?: string;

  /**
   * Options for the command-line interface. Can be one of the following:
   *
   * - `true` - To default to `process.stdin` and `process.stdout`.
   * - `false` - To disable all CLI output. Cannot be used when `release` is "prompt".
   * - An object that will be passed to `readline.createInterface()`.
   *
   * Defaults to `true`.
   */
  interface?: boolean | InterfaceOptions;
}

/**
 * Options for the command-line interface.
 */
export interface InterfaceOptions {
  /**
   * The stream that will be used to read user input.  Can be one of the following:
   *
   * - `true` - To default to `process.stdin`
   * - `false` - To disable all CLI input
   * - Any readable stream
   *
   * Defaults to `true`.
   */
  input?: NodeJS.ReadableStream | NodeJS.ReadStream | boolean;

  /**
   * The stream that will be used to write output, such as prompts and progress.
   * Can be one of the following:
   *
   * - `true` - To default to `process.stdout`
   * - `false` - To disable all CLI output
   * - Any writable stream
   *
   * Defaults to `true`.
   */
  output?: NodeJS.WritableStream | NodeJS.WriteStream | boolean;

  /**
   * Any other properties will be passed directly to `readline.createInterface()`.
   * See the `ReadLineOptions` interface for possible options.
   */
  [key: string]: unknown;
}