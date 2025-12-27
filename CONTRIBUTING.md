# Contributing to Oriento

Thank you for your interest in contributing to Oriento! We welcome contributions from everyone, whether you're fixing a bug, adding a feature, improving documentation, or helping with design.

## 🎯 How to Contribute

There are many ways to contribute to Oriento:

- **Report bugs** and request features
- **Submit code** improvements and new features
- **Improve documentation** and help others
- **Design** user interface and experience improvements
- **Test** the platform and provide feedback
- **Translate** content for internationalization

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:
- **Node.js 18+** installed
- **Git** for version control
- A **GitHub account**
- Basic knowledge of **React**, **Next.js**, and **TypeScript**

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/oriento.git
   cd oriento
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Make your changes**
   - Follow our coding standards
   - Write tests if applicable
   - Update documentation as needed

6. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

## 📋 Contribution Guidelines

### Code Style

We use consistent coding standards across the project:

#### TypeScript/React
- Use **TypeScript** for all new code
- Follow **React best practices** and hooks patterns
- Use **functional components** with hooks
- Implement **proper error boundaries**
- Add **TypeScript types** for all props and functions

#### Styling
- Use **Tailwind CSS** for styling
- Follow **shadcn/ui** component patterns
- Maintain **responsive design** principles
- Use **semantic HTML** elements
- Follow **accessibility guidelines**

#### File Organization
```
src/
├── app/                    # Next.js app directory
│   ├── (section)/         # Route groups
│   └── page.tsx           # Page components
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── app/              # App-specific components
│   └── [section]/        # Section-specific components
└── lib/                  # Utility functions
```

#### Naming Conventions
- **Files**: `kebab-case.tsx` for components
- **Components**: `PascalCase` for React components
- **Functions**: `camelCase` for functions and variables
- **Constants**: `UPPER_SNAKE_CASE` for constants
- **Types**: `PascalCase` for TypeScript types/interfaces

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer]
```

#### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

#### Examples
```bash
feat(auth): add email verification flow
fix(console): resolve sidebar navigation issue
docs(readme): update installation instructions
style(ui): improve button component styling
```

### Pull Request Process

1. **Update documentation** if you've changed APIs or added features
2. **Add tests** for new functionality
3. **Ensure all tests pass** and code follows style guidelines
4. **Update the changelog** if it's a significant change
5. **Create a pull request** with a clear title and description

#### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tests pass locally
- [ ] Added new tests for new functionality
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or clearly documented)
```

## 🐛 Reporting Issues

### Bug Reports

When reporting bugs, please include:

1. **Clear title** describing the issue
2. **Steps to reproduce** the problem
3. **Expected behavior** vs actual behavior
4. **Screenshots** or videos if applicable
5. **Environment details**:
   - Browser and version
   - Operating system
   - Device type (desktop/mobile)
   - Screen resolution

### Feature Requests

For feature requests, please provide:

1. **Clear description** of the proposed feature
2. **Use case** and problem it solves
3. **Proposed solution** or implementation ideas
4. **Alternative solutions** considered
5. **Additional context** or mockups

## 🎨 Design Contributions

### UI/UX Guidelines

- Follow **Oriento design system** principles
- Maintain **consistency** with existing components
- Ensure **accessibility** compliance (WCAG 2.1 AA)
- Design for **mobile-first** responsive layouts
- Use **Ubuntu font** and **#2563EB primary color**

### Design Assets

- Use **Figma** for design mockups
- Provide **high-fidelity** designs for new features
- Include **interaction states** (hover, active, disabled)
- Consider **dark mode** compatibility for future
- Export assets in **appropriate formats** (SVG, PNG)

## 📚 Documentation

### Types of Documentation

- **Code comments** for complex logic
- **README updates** for setup changes
- **API documentation** for new endpoints
- **User guides** for new features
- **Developer guides** for contributors

### Documentation Standards

- Use **clear, concise language**
- Include **code examples** where helpful
- Add **screenshots** for UI features
- Keep **up-to-date** with code changes
- Follow **markdown best practices**

## 🧪 Testing

### Testing Strategy

- **Unit tests** for utility functions
- **Component tests** for React components
- **Integration tests** for user flows
- **E2E tests** for critical paths
- **Manual testing** for UI/UX validation

### Testing Guidelines

- Write tests for **new functionality**
- Maintain **existing test coverage**
- Use **descriptive test names**
- Test **edge cases** and error conditions
- Mock **external dependencies**

## 🏷️ Release Process

### Versioning

We follow [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Release Checklist

- [ ] All tests pass
- [ ] Documentation updated
- [ ] Changelog updated
- [ ] Version bumped
- [ ] Release notes prepared
- [ ] Security review completed

## 🤝 Community

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Email**: contribute@oriento.com for direct contact

### Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment for all contributors.

### Recognition

Contributors are recognized in:
- **README.md** contributors section
- **Release notes** for significant contributions
- **GitHub contributors** page
- **Annual contributor** highlights

## 📞 Getting Help

If you need help with contributing:

- **Check existing issues** and documentation first
- **Ask questions** in GitHub Discussions
- **Join our community** channels
- **Email us** at contribute@oriento.com

### Mentorship

New contributors can request mentorship:
- **Pair programming** sessions
- **Code review** guidance
- **Architecture** discussions
- **Career advice** for open source

## 📄 Legal

### License Agreement

By contributing to Oriento, you agree that your contributions will be licensed under the same [MIT License](LICENSE) that covers the project.

### Copyright

- You retain **copyright** of your contributions
- You grant Oriento **perpetual license** to use your contributions
- Ensure you have **rights** to contribute any code or assets

---

## Thank You! 🙏

Every contribution, no matter how small, helps make Oriento better for young people seeking educational and career opportunities. We appreciate your time and effort in helping us build something meaningful.

**Happy Contributing!** 🚀