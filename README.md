# Oriento | Find Your Direction

Oriento is a web-based guidance and opportunity-matching platform designed to help young people discover relevant global education, career, and program opportunities without overwhelm. Instead of open-ended searching, Oriento guides users through a short, structured question flow and applies rule-based matching to recommend 3–5 opportunities that fit their age, location, interests, and availability.

## 🎯 Mission

To provide clarity, trust, and speed to value for young people seeking educational and career opportunities, while laying a strong foundation for future personalization and intelligent guidance.

## ✨ Features

### For Individual Users
- **Guided Discovery**: Structured question flow to understand user preferences
- **Smart Matching**: Rule-based algorithm recommends 3-5 relevant opportunities
- **Personal Dashboard**: Track progress, save opportunities, and manage applications
- **Opportunity Explorer**: Browse and filter available programs and opportunities
- **Profile Management**: Maintain personal information and preferences

### For Schools & Organizations
- **Admin Console**: Manage users, organizations, and system settings
- **User Management**: View and manage students, teachers, and staff
- **Organization Settings**: Configure school-specific preferences and branding
- **Analytics Dashboard**: Track usage and engagement metrics

### Platform Features
- **Role-Based Access**: Single console supporting both individual users and schools
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface built with shadcn/ui components
- **Secure Authentication**: Complete auth flow with email verification and password reset

## 🚀 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Lucide React
- **Font**: Ubuntu (Google Fonts)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
oriento/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── auth/              # Authentication pages
│   │   ├── console/           # Main application console
│   │   │   ├── admin/         # Admin-specific pages
│   │   │   ├── dashboard/     # User dashboard
│   │   │   ├── explore/       # Opportunity browser
│   │   │   ├── guide/         # Guided matching flow
│   │   │   ├── help/          # Help and support
│   │   │   ├── profile/       # User profile management
│   │   │   ├── saved/         # Saved opportunities
│   │   │   └── settings/      # User settings
│   │   ├── legal/             # Legal pages (terms, privacy, etc.)
│   │   └── site/              # Marketing site pages
│   ├── components/            # Reusable components
│   │   ├── app/               # App-specific components
│   │   ├── console/           # Console-specific components
│   │   ├── site/              # Site-specific components
│   │   └── ui/                # shadcn/ui components
│   └── lib/                   # Utility functions
├── public/                    # Static assets
│   └── icons/                 # App icons and favicon
└── docs/                      # Documentation
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/oriento/oriento.git
   cd oriento
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Primary**: #2563EB (Blue 600)
- **Theme**: Light mode with clean, professional aesthetics
- **Typography**: Ubuntu font family

### Components
- Built with shadcn/ui for consistency and accessibility
- Custom Oriento branding and logo integration
- Responsive design patterns throughout

## 📱 Key User Flows

### 1. Opportunity Discovery
1. User completes guided question flow
2. System applies rule-based matching
3. 3-5 relevant opportunities recommended
4. User can save, explore, or apply

### 2. School Administration
1. Admin manages organization settings
2. User management for students and staff
3. Analytics and reporting dashboard
4. System configuration and preferences

## 🔒 Security & Privacy

- Secure authentication with email verification
- Privacy-compliant data handling
- GDPR-ready privacy controls
- Comprehensive legal documentation

## 📈 Roadmap

### v1.0 (Current)
- ✅ Core platform infrastructure
- ✅ User authentication and management
- ✅ Guided opportunity matching
- ✅ Admin console for schools
- ✅ Responsive design and branding

### Future Versions
- AI-powered personalization
- Advanced analytics and insights
- Third-party integrations
- Mobile applications
- Multi-language support

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check our [docs](docs/) directory
- **Issues**: Report bugs on [GitHub Issues](https://github.com/oriento/oriento/issues)
- **Community**: Join our discussions
- **Email**: support@oriento.com

## 🙏 Acknowledgments

Built with modern web technologies and a focus on user experience. Special thanks to the open-source community for the amazing tools and libraries that make Oriento possible.

---

**Oriento** - Helping young people find their direction in education and career opportunities.