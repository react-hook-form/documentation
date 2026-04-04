# react-ko-form plugin

React Hook Form skills for Claude Code — setup guide, API recommendation, and form code scaffolding.

Each skill reads local documentation bundled via symlinks, so all recommendations are grounded in the actual API reference — no network requests needed.

## Installation

### Claude Code Plugin Marketplace (recommended)

```
claude plugin install hamsurang/react-ko-form
```

### Via npx skills

```
npx skills add hamsurang/react-ko-form
```

### Local Development

```
claude --plugin-dir ./react-ko-form-plugin
```

## Skills

| Skill | Command | Description |
|-------|---------|-------------|
| Guide | `/react-ko-form:guide` | Installation, setup, and hook usage guide |
| Recommend | `/react-ko-form:recommend` | Find the right API or pattern for your use case |
| Form Builder | `/react-ko-form:form-builder` | Generate typed form code from natural language |

## Usage Examples

```
/react-ko-form:guide useForm
/react-ko-form:guide validation
/react-ko-form:recommend I need to watch all form values without re-rendering
/react-ko-form:form-builder login form with email and password
/react-ko-form:form-builder registration form with name, email, password, confirm password, and terms checkbox
```

## How It Works

Skills reference local documentation from the `origin-src/content/` directory (English MDX files) and code examples from `origin-src/components/codeExamples/`. Documentation is linked via symlinks so it stays in sync with the repository.

Based on react-hook-form v7.x documentation.

## Platform Note

On Windows, ensure symlinks are enabled:

```
git config core.symlinks true
```

Then re-clone the repository for symlinks to resolve correctly.

## License

MIT
