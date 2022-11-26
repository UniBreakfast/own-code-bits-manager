# [Own Code Bits Manager](https://github.com/UniBreakfast/own-code-bits-manager)

## Idea 

Own Code Bits Manager (OCBM) a tool to self host, catalog and easily reuse own small code solutions by including bits into any local project via code-bit-list (cbl-files) which then are used to bring in every bit desired with OCBM's help.

## Usage

### Install

```bash
npm install -g ocbm
```

This command will install OCBM globally on your system and make it available via the `ocbm` command by adding it to your PATH environment variable.

### Create a new code-bit-list in your project

```bash
ocbm init fav-methods[.cbl]
```

This command will create a new file called `fav-methods.cbl` (you can give it any name) in your current directory. The extension is explicit or implicit - it doesn't matter. The file will contain a list of code bits available in your library. You can delete those you don't need. The file will be used by OCBM to know which bits to include in your project on install.

### Install code bits from your library into your project

```bash
ocbm i[nstall]
```

This command will install (bring in) all code-bits listed in your `.cbl` files in current project folder.

### Add a new code-bit to the library

```bash
ocbm add <bit-name> <bit-path>[.js]
```

This command will add a new code-bit to your library. The `<bit-name>` is the name of the code-bit and will be used to reference it in your `.cbl` files. The `<bit-path>` is the path to the file containing the code-bit. The extension is explicit or implicit - it doesn't matter. The file will be copied to your library and will be available for install via OCBM in the future.

### Remove a code-bit

```bash
ocbm remove <bit-name>
```
This command will remove a code-bit from your library. The `<bit-name>` is the name of the code-bit to remove.
