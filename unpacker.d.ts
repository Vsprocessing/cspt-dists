import type { AssignmentCheck, BundlePayload, CompileCheck, EditableRegion, TemplateFile, ValidatorCheck } from "./types.js";
export declare class Unpacker {
    private readonly bundleBytes;
    private payloadPromise;
    constructor(bundleBytes: Uint8Array | ArrayBuffer);
    id(): Promise<string>;
    displayName(): Promise<string>;
    description(): Promise<string>;
    disclaimer(): Promise<string | undefined>;
    editableRegions(): Promise<EditableRegion[]>;
    checks(includeHidden?: boolean): Promise<AssignmentCheck[]>;
    validators(includeHidden?: boolean): Promise<ValidatorCheck[]>;
    compileChecks(includeHidden?: boolean): Promise<CompileCheck[]>;
    templateFiles(): Promise<TemplateFile[]>;
    templateFileMap(): Promise<Record<string, Uint8Array>>;
    templateTextFiles(encoding?: string): Promise<Record<string, string>>;
    payload(): Promise<BundlePayload>;
    private open;
}
