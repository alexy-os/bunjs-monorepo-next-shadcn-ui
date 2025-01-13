# Bun Monorepo with Next.js and shadcn/ui

## Overview
A modern monorepo setup powered by Bun runtime, featuring a Next.js application with shadcn/ui components. This architecture provides a scalable and maintainable structure for building enterprise-grade web applications.

## Tech Stack
- **Runtime & Package Manager**: Bun
- **Framework**: Next.js 14+
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Type Safety**: TypeScript

## Repository Structure
```
├── apps/
│   └── web/                 # Next.js application
│       └── next.config.js   # Next.js configuration
├── packages/
│   └── ui/                  # Shared UI components library
│       ├── next.config.js   # Required for shadcn/ui initialization
│       ├── components.json  # shadcn/ui configuration
│       └── package.json     # UI package configuration
├── package.json            # Root package configuration
└── tsconfig.json          # TypeScript configuration with path aliases
```

## Initial Setup
1. **Create Base Structure**
```bash
mkdir apps packages
mkdir apps/web packages/ui
```

2. **Configure Package Files**
> packages/ui/package.json
```json
{
  "name": "@bun-monorepo/ui",
  "exports": {
    ".": { "import": "./src/index.ts" },
    "./*": "./src/components/ui/*.tsx",
    "./lib/utils": "./src/lib/utils.ts"
  }
}
```

3. **Setup TypeScript Paths**
> tsconfig.json
```json
{
  "compilerOptions": {
    "paths": {
      "@bun-monorepo/ui": ["packages/ui/src"],
      "@bun-monorepo/ui/*": ["packages/ui/src/*"],
      "@bun-monorepo/ui/components/*": ["packages/ui/src/components/*"],
      "@bun-monorepo/ui/hooks/*": ["packages/ui/src/hooks/*"],
      "@bun-monorepo/lib/*": ["packages/ui/src/lib/*"],
      "@bun-monorepo/lib/utils": ["packages/ui/src/lib/utils.ts"],
      "@web": ["apps/web/src"],
      "@web/*": ["apps/web/src/*"]
    }
  }
}
```

4. **Initialize shadcn/ui**
```bash
# Create next.config.js in packages/ui (required for shadcn initialization)
echo "module.exports = { reactStrictMode: true }" > packages/ui/next.config.js

# Initialize shadcn/ui
bun run ui:init

# Add components
bun run ui:add button
```

## Path Aliases Usage
```typescript
// Import UI components
import { Button } from "@bun-monorepo/ui/button";
import { cn } from "@bun-monorepo/ui/lib/utils";

// Import from web application
import { Component } from "@web/components";
```

## Scripts
> package.json
```json
{
  "scripts": {
    "dev": "bun run --cwd apps/web dev",
    "build": "bun run build:packages && bun run build:apps",
    "ui:init": "bun x shadcn@latest init --cwd packages/ui",
    "ui:add": "bun x shadcn@latest add --cwd packages/ui"
  }
}
```

## Key Configuration Files
1. **next.config.js** (required in both apps/web and packages/ui)
2. **components.json** (for shadcn/ui configuration)
3. **tsconfig.json** (for path aliases)
4. **package.json** (in root and packages/ui)

## Best Practices
- Always have next.config.js in packages/ui for shadcn initialization
- Use consistent path aliases across the monorepo
- Keep UI components in packages/ui/src/components/ui
- Use proper exports in packages/ui/package.json
- Maintain clear separation between app and UI package

## Requirements
- Bun 1.0+
- Node.js 18+
- TypeScript 5.3+
- Next.js 14+

## Common Issues
- shadcn/ui initialization requires next.config.js in packages/ui
- Path aliases must be consistent in tsconfig.json and components.json
- Component imports should match the exports in package.json

## License
MIT