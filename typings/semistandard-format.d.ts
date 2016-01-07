declare module "semistandard-format" {
	interface ISemiStandardFormat {
		(file:string): string;
	}

	export var transform:ISemiStandardFormat;
}