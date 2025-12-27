# Security Policy

## Supported Versions

We actively support the following versions of Oriento with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

The Oriento team takes security seriously. We appreciate your efforts to responsibly disclose your findings.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by emailing us at:
**security@oriento.com**

### What to Include

Please include the following information in your report:

- **Description**: A clear description of the vulnerability
- **Impact**: What an attacker could achieve by exploiting this vulnerability
- **Steps to Reproduce**: Detailed steps to reproduce the vulnerability
- **Proof of Concept**: If possible, include a proof of concept
- **Affected Components**: Which parts of the application are affected
- **Suggested Fix**: If you have ideas for how to fix the vulnerability

### Response Timeline

- **Initial Response**: We will acknowledge receipt of your report within 48 hours
- **Investigation**: We will investigate and validate the report within 5 business days
- **Resolution**: We aim to resolve critical vulnerabilities within 30 days
- **Disclosure**: We will coordinate with you on the disclosure timeline

### Security Measures

Oriento implements several security measures:

#### Authentication & Authorization
- Secure user authentication with email verification
- Role-based access control (RBAC)
- Session management and timeout
- Password strength requirements
- Account lockout protection

#### Data Protection
- Data encryption in transit (HTTPS)
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF protection

#### Infrastructure Security
- Regular security updates
- Secure deployment practices
- Environment variable protection
- Rate limiting and DDoS protection

#### Privacy & Compliance
- GDPR compliance measures
- Data minimization principles
- User consent management
- Right to deletion (Right to be Forgotten)
- Data portability

### Security Best Practices for Users

#### For Individual Users
- Use strong, unique passwords
- Enable two-factor authentication when available
- Keep your account information up to date
- Log out from shared devices
- Report suspicious activity immediately

#### For School Administrators
- Regularly review user access permissions
- Monitor user activity logs
- Keep organization settings secure
- Train staff on security best practices
- Implement strong password policies

### Vulnerability Disclosure Policy

We follow responsible disclosure practices:

1. **Private Disclosure**: Report vulnerabilities privately first
2. **Coordinated Timeline**: We work with reporters on disclosure timing
3. **Credit**: We provide credit to security researchers (with permission)
4. **Public Disclosure**: After fixes are deployed, we may publish security advisories

### Security Updates

- Security updates are released as soon as possible
- Critical vulnerabilities receive immediate attention
- Users are notified through multiple channels:
  - Email notifications
  - In-app announcements
  - GitHub security advisories
  - Website announcements

### Bug Bounty Program

We are considering implementing a bug bounty program. Stay tuned for updates on our security page.

### Contact Information

- **Security Team**: security@oriento.com
- **General Support**: support@oriento.com
- **Website**: https://oriento.com/security

### Legal

This security policy is subject to our [Terms of Service](https://oriento.com/legal/terms) and [Privacy Policy](https://oriento.com/legal/privacy).

---

Thank you for helping keep Oriento and our users safe!