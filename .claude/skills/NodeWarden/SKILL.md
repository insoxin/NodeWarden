# NodeWarden Development Patterns

> Auto-generated skill from repository analysis

## Overview

NodeWarden is a TypeScript-based project that appears to be a comprehensive monitoring and management system with web interfaces, authentication handling, and API routing capabilities. The codebase follows conventional commit patterns and maintains clean separation between handlers, web clients, and configuration files.

## Coding Conventions

### File Naming
- Use **camelCase** for all TypeScript files
- Example: `identityHandler.ts`, `webClient.ts`, `routerConfig.ts`

### Import/Export Style
```typescript
// Use relative imports
import { identityHandler } from './handlers/identity';
import { webConfig } from '../config/web';

// Use named exports
export { AuthResult, IdentityError };
export const validateIdentity = () => { /* ... */ };
```

### Commit Message Format
```
feat: add new authentication endpoint
fix: resolve 2FA validation issue  
chore: update dependencies to latest versions
docs: improve README installation instructions
```

## Workflows

### Identity Handler Fixes
**Trigger:** When authentication or 2FA issues are discovered
**Command:** `/fix-auth`

1. Identify the specific authentication issue in `src/handlers/identity.ts`
2. Apply targeted fix to the handler method
3. Test compatibility with existing authentication flows
4. Handle any merge conflicts with concurrent changes
5. Verify 2FA integration still functions correctly

```typescript
// Example fix pattern
export const validateTwoFactor = async (token: string, userId: string) => {
  try {
    // Fix: Add proper error handling
    if (!token || !userId) {
      throw new IdentityError('Missing required parameters');
    }
    // ... validation logic
  } catch (error) {
    // Improved error handling
    logger.error('2FA validation failed', { userId, error });
    throw error;
  }
};
```

### README Documentation Updates
**Trigger:** When features change or documentation needs improvement  
**Command:** `/update-docs`

1. Update `README.md` with new feature descriptions or clarifications
2. Update `README_EN.md` to maintain English version parity
3. Sync content between both versions ensuring consistency
4. Review for clarity and completeness

### WebApp UI Enhancement
**Trigger:** When UI needs enhancement or new components are added
**Command:** `/enhance-ui`

1. Update `webapp/src/App.tsx` for routing or layout changes
2. Modify specific page components in `webapp/src/components/`
3. Update `webapp/src/styles.css` for visual improvements
4. Add i18n translations in `webapp/src/lib/i18n.ts` if needed

```typescript
// Example App.tsx routing update
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* New route addition */}
        <Route path="/monitoring" element={<MonitoringView />} />
      </Routes>
    </Router>
  );
};
```

### Web Client Development
**Trigger:** When web client functionality needs updates
**Command:** `/update-webclient`

1. Update web handler in `src/handlers/web.ts`
2. Modify client-side scripts in `public/web/*.js`
3. Update styling in `public/web/styles.css`
4. Test interface functionality across different browsers
5. Update TypeScript definitions in `src/webclient/*.ts`

### Router Handler Updates
**Trigger:** When adding new API endpoints or modifying existing ones
**Command:** `/add-endpoint`

1. Update `src/router.ts` with new route definitions
2. Modify relevant handler files in `src/handlers/`
3. Update configuration limits in `src/config/limits.ts` if needed
4. Test all API endpoints for proper functionality
5. Ensure proper error handling and validation

```typescript
// Example router update pattern
router.post('/api/v1/monitoring/status', async (req, res) => {
  try {
    const result = await monitoringHandler.getStatus(req.body);
    res.json(result);
  } catch (error) {
    handleApiError(res, error);
  }
});
```

### Package Dependency Updates
**Trigger:** When dependencies need updating or build process changes
**Command:** `/update-deps`

1. Review and update `package.json` dependencies
2. Run `npm install` to regenerate `package-lock.json`
3. Test build process with `npm run build`
4. Update related configuration files if breaking changes occur
5. Verify all functionality works with updated dependencies

## Testing Patterns

Tests follow the `*.test.*` file pattern and should be placed alongside their corresponding source files:

```typescript
// Example test structure
describe('Identity Handler', () => {
  it('should validate user credentials', async () => {
    const result = await identityHandler.validate(mockCredentials);
    expect(result.success).toBe(true);
  });
  
  it('should handle 2FA verification', async () => {
    // Test 2FA flow
  });
});
```

## Commands

| Command | Purpose |
|---------|---------|
| `/fix-auth` | Fix authentication and identity handling issues |
| `/update-docs` | Update README files and documentation |
| `/enhance-ui` | Improve webapp UI components and styling |
| `/update-webclient` | Develop and refine web client interface |
| `/add-endpoint` | Add new API routes and update handlers |
| `/update-deps` | Update project dependencies and build config |