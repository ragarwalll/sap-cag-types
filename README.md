# SAP Cloud Application Types Library

[![NPM Version](https://img.shields.io/npm/v/@ragarwal06/sap-cloud-application-generator-types)](https://www.npmjs.com/package/@ragarwal06/sap-cloud-application-generator-types)  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A shared TypeScript library of enums, interfaces, and constants used by both the CLI and VSIX generators for SAP Cloud Application projects. Provides:

- Standardized service identifiers and configuration keys
- Supported package lists for frontends and backends
- Common interfaces for project metadata and dependency specs

## 🚀 Features

- Enums for supported frontends (`FrontendFramework`), backends (`BackendFramework`), and services (`BtpService`)
- Predefined lists of package names and versions for UI5, React, Node.js, Spring Boot, etc.
- Interfaces:
  - `ProjectOptions` for generator inputs
  - `DependencySpec` for package/version pairs
  - `ServiceConfig` for SAP BTP services configuration
- Single source of truth for both `@ragarwal06/sap-fs-app` CLI and VS Code extension

## 🎯 Installation

Install via npm, yarn, or pnpm:

```bash
# npm
npm install @ragarwal06/sap-cloud-application-types --save

# yarn
yarn add @ragarwal06/sap-cloud-application-types

# pnpm
pnpm add @ragarwal06/sap-cloud-application-types
```

## 📦 Library Contents

### Enums

- `FrontendFramework`
  - `UI5`, `REACT`
- `BackendFramework`
  - `NODE`, `SPRING`
- `BtpService`
  - `XSUAA`, `HANA`, `CONNECTIVITY`, `DESTINATION`, etc.

## 📄 License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
