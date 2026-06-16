export type CheckKind = "validator" | "compiles";
export interface BaseCheck {
    id: string;
    displayName?: string;
    description?: string;
    hidden?: boolean;
    timeoutMs?: number;
}
export interface ValidatorCheck extends BaseCheck {
    type: "validator";
    mainClass: string;
    /**
     * Java source files keyed by relative path, e.g. {"HiddenValidator.java": "..."}.
     * CSPT stores these; an external grader decides how to compile/run them.
     */
    files: Record<string, string>;
    args?: string[];
    classpath?: string[];
}
export interface CompileCheck extends BaseCheck {
    type: "compiles";
    /**
     * Optional metadata for the external grader. CSPT does not execute compilers.
     */
    sourceGlobs?: string[];
    args?: string[];
}
export type AssignmentCheck = ValidatorCheck | CompileCheck;
export interface EditableRegion {
    /**
     * Relative path inside the template zip.
     */
    file: string;
    id: string;
    /**
     * Text marker that opens the editable region. Only content after this marker
     * and before endMarker should be editable by assignment-mode consumers.
     */
    startMarker: string;
    endMarker: string;
}
export interface BundleInput {
    id: string;
    displayName: string;
    description: string;
    disclaimer?: string;
    templateDir: string;
    editableRegions?: EditableRegion[];
    checks: AssignmentCheck[];
}
export interface BundleOptions {
}
export interface BundlePayload {
    id: string;
    displayName: string;
    description: string;
    disclaimer?: string;
    templateZipBase64: string;
    editableRegions?: EditableRegion[];
    checks: AssignmentCheck[];
    createdAt: string;
}
export interface TemplateFile {
    path: string;
    bytes: Uint8Array;
}
