declare namespace shortid {
	function generate(): string;
	function characters(string: string): string;
	function isValid(id: any): boolean;
	function worker(integer: number): void;
	function seed(float: number): void;
}
