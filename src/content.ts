import { ProjectData } from "./types";
// src/content.ts


export const projectsData: ProjectData[] = [
	{
		id: "ghaith",
		pageId: "project-ghaith",
		name: {
			en: "غيث | Ghaith",
			ar: "غيث | Ghaith"
		},
		type: {
			en: "Device Project",
			ar: "مشروع جهاز"
		},
		status: {
			en: "Explore",
			ar: "تصفح"
		},
		shortDescription: {
			en: "Ghaith is a device project under development within the Libyonics portfolio.",
			ar: "غيث مشروع جهاز قيد التطوير ضمن مشاريع Libyonics."
		},
		imagePath: "/src/assets/images/project_ghaith_device_1792934929086.jpg",
		imageAlt: {
			en: "Ghaith hardware device prototype study on stone surface",
			ar: "دراسة نموذج جهاز غيث الأولي على منصة حجرية"
		},
		tag: {
			en: "Hardware Engineering",
			ar: "هندسة العتاد التقني"
		},
		number: "01"
	},
	{
		id: "application",
		pageId: "project-application",
		name: {
			en: "حجة | HAJJA",
			ar: "حجة | HAJJA"
		},
		codeName: {
			en: "حجة | HAJJA",
			ar: "حجة | HAJJA"
		},
		type: {
			en: "Application Project",
			ar: "مشروع تطبيق"
		},
		status: {
			en: "Explore",
			ar: "تصفح"
		},
		shortDescription: {
			en: "An educational application platform currently in development within the Libyonics technology portfolio.",
			ar: "منصة تعليمية قيد التطوير حالياً ضمن منظومة مشاريع Libyonics."
		},
		imagePath: "/src/assets/images/project_app_spatial_1792934930074.jpg",
		imageAlt: {
			en: "Abstract computational architectural grid and translucent spatial planes",
			ar: "تكوين معماري حاسوبي تجريدي من الألواح والشبكات المكانية"
		},
		tag: {
			en: "Software Systems",
			ar: "الأنظمة البرمجية"
		},
		number: "02"
	},
	{
		id: "zena",
		pageId: "project-zena",
		name: {
			en: "Zena AI",
			ar: "Zena AI"
		},
		codeName: {
			en: "Zena AI",
			ar: "Zena AI"
		},
		type: {
			en: "Scientific Research & Supervisor Tool",
			ar: "أداة للبحث العلمي والمصادر والمراجع ومشرف"
		},
		status: {
			en: "Explore",
			ar: "تصفح"
		},
		shortDescription: {
			en: "An intelligent academic platform for scientific research, reference and citation discovery, and automated supervisor advisory.",
			ar: "أداة للبحث العلمي والمصادر والمراجع ومشرف أكاديمي ذكي."
		},
		imagePath: "/src/assets/images/zena_ai_mockup_1793275150720.jpg",
		imageAlt: {
			en: "Zena AI academic research platform interface with citation graph network and supervisor notes",
			ar: "واجهة منصة Zena AI للبحث العلمي وشبكة المراجع وإدارة الإشراف الأكاديمي"
		},
		tag: {
			en: "Academic AI & Research",
			ar: "الذكاء الاصطناعي للبحث العلمي"
		},
		number: "03"
	}
];
export const content = {
	en: {
		brand: "LIBYONICS",
		tagline: "Technology & Project Development",
		nav: {
			home: "Home",
			about: "About",
			projects: "Projects",
			team: "About the Team",
			contact: "Contact",
			switchLang: "العربية",
			inquire: "Initiate Inquiry"
		},
		hero: {
			badge: "",
			headlinePart1: "Technology solutions making a real difference.",
			headlinePart2: "",
			headlineAccent: "",
			kicker: "",
			headline: "Technology solutions making a real difference.",
			supporting: "We develop technology projects aimed at addressing real-world challenges, innovating solutions that meet the needs of individuals and businesses, and opening new horizons for the future.",
			primaryCta: "Explore Our Projects",
			secondaryCta: "About the Company",
			metaYear: "EST. PORTFOLIO 2026",
			metaDiscipline: "HARDWARE & SOFTWARE ENGINEERING",
			stats: []
		},
		about: {
			kicker: "Corporate Profile",
			title: "Principled Technology Development",
			statement: "Libyonics is a technology company developing projects with a focus on clear direction, thoughtful execution, and user experience.",
			disclosure: "Official corporate overview — subject to internal governance updates as projects mature.",
			pillars: [
				{
					number: "01",
					title: "Clear Direction",
					desc: "We cultivate technology initiatives anchored in fundamental utility. Each concept begins with a distinct purpose, avoiding gratuitous novelty in favor of meaningful function."
				},
				{
					number: "02",
					title: "Thoughtful Execution",
					desc: "Our methodology emphasizes structural precision, rigorous engineering standards, and disciplined development pipelines across physical and digital mediums."
				},
				{
					number: "03",
					title: "User Experience",
					desc: "We place human comprehension and ergonomics at the core of all systems. Technology should interact with clarity, restraint, and effortless utility."
				}
			],
			methodology: {
				heading: "Development Lifecycle",
				stages: [
					{
						phase: "Phase I",
						name: "Ideation & Feasibility",
						status: "Active"
					},
					{
						phase: "Phase II",
						name: "Engineering & Prototyping",
						status: "Current Focus"
					},
					{
						phase: "Phase III",
						name: "Validation & Deployment",
						status: "Upcoming"
					}
				]
			}
		},
		team: {
			kicker: "Engineering & Leadership",
			title: "About the Team",
			subtitle: "The multidisciplinary engineers, researchers, and builders developing technology across Libyonics initiatives.",
			overview: "Our team bridges mechanical hardware, computational architectures, applied artificial intelligence, and human ergonomics into cohesive, enduring systems.",
			valuesTitle: "Operating Principles",
			values: [
				{
					num: "01",
					title: "Deep Domain Rigor",
					desc: "Every contributor brings specialized depth, ensuring each project adheres to rigorous verification and engineering benchmarks."
				},
				{
					num: "02",
					title: "Cross-Disciplinary Cohesion",
					desc: "Tight synergy between physical device prototypes, embedded firmware, scalable software stacks, and cognitive algorithms."
				},
				{
					num: "03",
					title: "Principled Innovation",
					desc: "We build for tangible, authentic utility rather than surface-level hype or decorative complexity."
				}
			],
			divisionsTitle: "Specialized Engineering Disciplines",
			divisions: [
				{
					code: "DIV-01",
					name: "Hardware & Mechanical Engineering",
					role: "Physical Prototyping & Enclosure Engineering",
					description: "Specializes in industrial-grade prototyping, stress testing, embedded micro-controllers, and tactile ergonomics for device projects like Ghaith."
				},
				{
					code: "DIV-02",
					name: "Cognitive AI & Knowledge Networks",
					role: "Machine Learning & Semantic Synthesis",
					description: "Focuses on multi-source citation clustering, vector semantic retrieval, and supervisor dashboard intelligence powering Zena AI."
				},
				{
					code: "DIV-03",
					name: "Applied Systems & Platform Engineering",
					role: "Distributed Architecture & Interaction Systems",
					description: "Engineers fault-tolerant services, low-latency client state synchronization, and accessible interfaces for platforms like Hajja."
				},
				{
					code: "DIV-04",
					name: "Industrial Design & Human Factors",
					role: "Ergonomics, Materials & Experience Poise",
					description: "Refines tangible materials, geometric proportions, and cognitive clarity across physical hardware and software products."
				}
			],
			cultureTitle: "Engineering Standards & Accountability",
			cultureText: "We maintain peer review mechanisms, repeatable laboratory testing, and transparent documentation. Every initiative operates under clear stewardship from feasibility through validation.",
			joinCta: "Connect with Our Team"
		},
		projects: {
			kicker: "Selected Endeavors",
			title: "Current Projects",
			subtitle: "An editorial overview of active technology developments currently progressing within our portfolio.",
			viewProject: "View Project Brief",
			statusLabel: "Status",
			typeLabel: "Discipline",
			viewAll: "Return to All Projects"
		},
		projectGhaith: {
			kicker: "Project 01 · Hardware Division",
			title: "غيث | Ghaith",
			subheading: "A physical device project advancing through systematic prototyping and hardware development.",
			status: "In development",
			type: "Device project",
			description: "Ghaith is a device project under development within the Libyonics portfolio.",
			architectureTitle: "Engineering Discipline",
			architectureText: "The project explores physical design principles, tactile interface ergonomics, and integrated enclosure engineering. Development is conducted under strict performance benchmarks and material studies.",
			disclosureTitle: "Technical Specifications Notice",
			disclosureText: "Verified hardware specifications, dimensional blueprints, power architectures, and user capabilities will be published in official technical briefs upon advancement to the next development phase.",
			milestoneTitle: "Current Milestone",
			milestoneState: "Physical prototype testing and mechanical validation."
		},
		projectApp: {
			kicker: "Project 02 · Software Division",
			title: "حجة | HAJJA",
			placeholderNote: "Educational technology platform advancing through active software development.",
			subheading: "An educational platform engineered for responsive learning, interactive knowledge systems, and intuitive user experiences.",
			status: "In development",
			type: "Educational Platform",
			description: "An educational application platform currently in development within the Libyonics technology portfolio.",
			architectureTitle: "System Foundation",
			architectureText: "The platform architecture is structured around modular services, fault-tolerant state orchestration, and an uncompromising standard for typography, latency, and interface clarity.",
			disclosureTitle: "Feature & Release Notice",
			disclosureText: "Feature manifests, interface previews, and system integration guides remain confidential during active engineering sprints and will be documented in certified release notes.",
			milestoneTitle: "Current Milestone",
			milestoneState: "Core architecture and component system development."
		},
		projectZena: {
			kicker: "Project 03 · Academic Intelligence Division",
			title: "Zena AI",
			placeholderNote: "Advanced academic AI platform engineered for literature search, citation mapping, and thesis supervisor advisory.",
			subheading: "An academic research intelligence platform engineered for scientific discovery, citation network visualization, and structured thesis supervision.",
			status: "In development",
			type: "Scientific Research & Supervisor Tool",
			description: "Zena AI is an academic research platform under active development within the Libyonics portfolio, dedicated to empowering scholars, researchers, and university supervisors.",
			architectureTitle: "Cognitive Architecture & Indexing",
			architectureText: "The platform integrates multi-source citation clustering, vector semantic literature search, automated bibliography standardization, and longitudinal student progress tracking for thesis advisors.",
			disclosureTitle: "Research Features & Access Notice",
			disclosureText: "Institutional integrations, API connectors, and model evaluation protocols are undergoing rigorous academic verification and will be documented in official technical releases.",
			milestoneTitle: "Current Milestone",
			milestoneState: "Citation graph engine integration and supervisor dashboard prototyping."
		},
		contact: {
			kicker: "Engagement",
			title: "Corporate Inquiries",
			intro: "Libyonics welcomes dialogue with technical collaborators, institutional partners, and project stakeholders. Submit an inquiry through our dedicated corporate registry.",
			form: {
				nameLabel: "Full Name",
				namePlaceholder: "Enter your name",
				orgLabel: "Organization / Institution",
				orgPlaceholder: "Company, university, or independent practice",
				emailLabel: "Corporate or Professional Email",
				emailPlaceholder: "name@organization.com",
				subjectLabel: "Subject of Inquiry",
				subjectOptions: [
					"General Corporate Dialogue",
					"Project Inquiry — غيث | Ghaith",
					"Project Inquiry — حجة | HAJJA",
					"Project Inquiry — Zena AI",
					"Technology Collaboration & Research",
					"Institutional Representation"
				],
				messageLabel: "Message",
				messagePlaceholder: "Please provide context regarding your inquiry or proposed collaboration...",
				submit: "Transmit Inquiry",
				submitting: "Transmitting...",
				successTitle: "Inquiry Successfully Received",
				successMessage: "Thank you for contacting Libyonics. Your message has been logged in our institutional communications queue. Our team reviews all submissions with confidentiality and will respond if alignment exists.",
				reset: "Submit Another Inquiry",
				confidentialityNote: "All transmissions are held in strict commercial confidence. No promotional spam or solicitations."
			}
		},
		footer: {
			aboutSummary: "Libyonics is an institutional technology company developing focused physical and digital projects with architectural precision.",
			navigationTitle: "Navigation",
			projectsTitle: "Portfolio",
			standardsTitle: "Standards",
			standardsText: "Swiss Editorial Architecture · Verified Disclosures Only",
			copyright: "© 2026 Libyonics. All rights reserved.",
			disclaimer: "All project information is published strictly in accordance with verified development status."
		}
	},
	ar: {
		brand: "LIBYONICS",
		tagline: "تطوير المشاريع والابتكارات التقنية",
		nav: {
			home: "الرئيسية",
			about: "من نحن",
			projects: "المشاريع",
			team: "عن الفريق",
			contact: "التواصل",
			switchLang: "English",
			inquire: "تقديم استفسار"
		},
		hero: {
			badge: "",
			headlinePart1: "حلول تقنية تصنع فرقًا حقيقيًا.",
			headlinePart2: "",
			headlineAccent: "",
			kicker: "",
			headline: "حلول تقنية تصنع فرقًا حقيقيًا.",
			supporting: "نطوّر مشاريع تقنية تهدف إلى معالجة التحديات الواقعية، وابتكار حلول تواكب احتياجات الأفراد والأعمال، وتفتح آفاقًا جديدة للمستقبل.",
			primaryCta: "اكتشف مشاريعنا",
			secondaryCta: "تعرّف على الشركة",
			metaYear: "تأسيس المحفظة ٢٠٢٦",
			metaDiscipline: "الهندسة العتادية والبرمجية",
			stats: []
		},
		about: {
			kicker: "الملف التعريفي للشركة",
			title: "تطوير تقني قائم على المبادئ الراسخة",
			statement: "Libyonics شركة تعمل على تطوير مشاريع تقنية، مع التركيز على وضوح الهدف وجودة التنفيذ وتجربة المستخدم.",
			disclosure: "ملف تعريفي مؤسسي معتمد — يخضع لتحديثات الحوكمة الداخلية مع نضوج المشاريع.",
			pillars: [
				{
					number: "01",
					title: "وضوح الهدف",
					desc: "ننطلق في مبادراتنا التقنية من الفائدة الجوهرية والاحتياج الحقيقي، متجنبين المظاهر الاستعراضية لصالح القيمة الوظيفية الدقيقة."
				},
				{
					number: "02",
					title: "جودة التنفيذ",
					desc: "تعتمد منهجيتنا على الدقة البنائية والمعايير الهندسية الصارمة، مع انضباط عالٍ في جميع مسارات التطوير الفيزيائي والرقمي."
				},
				{
					number: "03",
					title: "تجربة المستخدم",
					desc: "نضع الإدراك الإنساني والسهولة الوظيفية في صميم كل نظام، بحيث تتكامل التقنية بسلاسة وهدوء وبأعلى درجات الموثوقية."
				}
			],
			methodology: {
				heading: "دورة حياة التطوير",
				stages: [
					{
						phase: "المرحلة الأولى",
						name: "بلورة الفكرة ودراسة الجدوى",
						status: "مكتملة"
					},
					{
						phase: "المرحلة الثانية",
						name: "الهندسة وتطوير النماذج الأولية",
						status: "التركيز الحالي"
					},
					{
						phase: "المرحلة الثالثة",
						name: "التحقق التشغيلي والإطلاق",
						status: "المرحلة القادمة"
					}
				]
			}
		},
		team: {
			kicker: "القيادة الهندسية والبحثية",
			title: "عن الفريق",
			subtitle: "نخبة من المهندسين والباحثين والمطورين يقودون مسارات الابتكار في مشاريع Libyonics المتنوعة.",
			overview: "يجمع فريق Libyonics بين كفاءات في الهندسة العتادية والميكانيكية، ومعمارية البرمجيات، والذكاء الاصطناعي، والتصميم الصناعي؛ لبناء تقنيات ذات أثر وظيفي مستدام.",
			valuesTitle: "المبادئ التوجيهية للفريق",
			values: [
				{
					num: "01",
					title: "الصرامة الهندسية",
					desc: "يمتلك كل عضو تخصصاً دقيقاً وعميقاً، مما يضمن خضوع كل مشروع لأعلى معايير الجودة والتحقق العلمي."
				},
				{
					num: "02",
					title: "التكامل متعدد التخصصات",
					desc: "تناغم وثيق بين الفرق العتادية والأنظمة البرمجية ومصممي التفاعل لتقديم حلول متكاملة."
				},
				{
					num: "03",
					title: "الابتكار الهادف",
					desc: "نطور حلولاً نابعة من الحاجة الواقعية والقيمة الجوهرية، بعيداً عن التعقيد الشكلي أو المظاهر الاستعراضية."
				}
			],
			divisionsTitle: "القطاعات التخصصية وفرق العمل",
			divisions: [
				{
					code: "DIV-01",
					name: "الهندسة العتادية والأنظمة المضمنة",
					role: "تطوير النماذج الأولية والتصميم الميكانيكي",
					description: "مسؤول عن بناء النماذج الصناعية، والدوائر الإلكترونية المدمجة، وميكانيكا التجميع والاختبارات الإجهادية لمشاريع مثل غيث."
				},
				{
					code: "DIV-02",
					name: "الذكاء الاصطناعي وهندسة المعرفة",
					role: "التعلم الآلي والشبكات الدلالية",
					description: "يركز على خوارزميات الربط الدلالي، والتحليل البصري للاقتباسات، وبناء محركات المعرفة الأكاديمية الذكية في Zena AI."
				},
				{
					code: "DIV-03",
					name: "معمارية البرمجيات والأنظمة التطبيقية",
					role: "البنى التحتية والتطبيقات التفاعلية",
					description: "يعمل على تصميم الأنظمة السحابية المعيارية، وسرعة الاستجابة، وتطوير الواجهات التفاعلية الحديثة لمنصة حجة."
				},
				{
					code: "DIV-04",
					name: "التصميم الصناعي والتجربة الإنسانية",
					role: "الأبعاد الإرجونومية والجمالية الوظيفية",
					description: "يعنى بتوافق الشكل الخارجي والمواد الملموسة وسهولة الاستخدام المعرفي في كافة التجارب المادية والرقمية."
				}
			],
			cultureTitle: "بيئة العمل وثقافة الابتكار",
			cultureText: "نتبنى ثقافة هندسية صارمة تقوم على المراجعة التخصصية النظيرة، والتجريب المستمر، والمسؤولية المؤسسية، حيث يعمل كل باحث ومهندس مباشرة على مخرجات المشاريع دون حواجز بيروقراطية.",
			joinCta: "تواصل مع فريق العمل"
		},
		projects: {
			kicker: "مشاريع مختارة",
			title: "المشاريع الحالية",
			subtitle: "استعراض تحريري للمشاريع التقنية النشطة التي تتقدم بثبات ضمن محفظتنا الابتكارية.",
			viewProject: "استعراض تفاصيل المشروع",
			statusLabel: "الحالة",
			typeLabel: "التصنيف",
			viewAll: "العودة إلى كافة المشاريع"
		},
		projectGhaith: {
			kicker: "المشروع 01 · قطاع الأجهزة والعتاد",
			title: "غيث | Ghaith",
			subheading: "مشروع جهاز مادي يتقدم بخطى منهجية عبر مراحل تطوير النماذج والهندسة الفيزيائية.",
			status: "تصفح",
			type: "مشروع جهاز",
			description: "غيث مشروع جهاز قيد التطوير ضمن مشاريع Libyonics.",
			architectureTitle: "المنهجية الهندسية",
			architectureText: "يرتكز المشروع على استكشاف مبادئ التصميم الصناعي المتطور، وهندسة الهياكل الدقيقة، مع التوافق التام مع معايير الأداء والمواد الحديثة.",
			disclosureTitle: "إشعار المواصفات التقنية",
			disclosureText: "المواصفات الفنية المعتمدة، والمخططات الهندسية، وبنية الطاقة، والقدرات التشغيلية ستُنشر في وثائق تقنية رسمية فور الانتقال إلى المرحلة التطويرية التالية.",
			milestoneTitle: "المرحلة الحالية",
			milestoneState: "اختبار النموذج الأولي والتحقق الميكانيكي الدقيق."
		},
		projectApp: {
			kicker: "المشروع 02 · قطاع الأنظمة البرمجية والتعليمية",
			title: "حجة | HAJJA",
			placeholderNote: "منصة تقنية تعليمية متقدمة قيد التطوير البرمجي النشط.",
			subheading: "منصة تعليمية مُهندسة لضمان الاستجابة الفائقة، وتكامل أدوات المعرفة، وسلاسة تجربة التعلم الرقمي.",
			status: "تصفح",
			type: "منصة تعليمية",
			description: "منصة تعليمية وتطبيق برمجي قيد التطوير حالياً ضمن منظومة مشاريع Libyonics.",
			architectureTitle: "الأساس المعماري للنظام",
			architectureText: "بُنيت هيكلية المنصة وفق أنظمة معيارية مستقلة تضمن موثوقية عالية للبيانات، مع التزام صارم بأعلى مستويات التحرير البصري وسرعة المعالجة.",
			disclosureTitle: "إشعار الخصائص والإطلاق",
			disclosureText: "قوائم المزايا والواجهات البرمجية وتفاصيل التكامل ستبقى ضمن إطار التطوير الداخلي حتى صدور الإفصاحات الرسمية المؤكدة.",
			milestoneTitle: "المرحلة الحالية",
			milestoneState: "تطوير المعمارية البرمجية الأساسية وحزم المكونات."
		},
		projectZena: {
			kicker: "المشروع 03 · قطاع الذكاء الاصطناعي والبحث العلمي",
			title: "Zena AI",
			placeholderNote: "أداة ذكية متطورة للبحث العلمي والمصادر والمراجع والإشراف الأكاديمي.",
			subheading: "أداة للبحث العلمي والمصادر والمراجع ومشرف أكاديمي، مصممة لدعم الباحثين والأكاديميين بأحدث تقنيات المعرفة.",
			status: "تصفح",
			type: "أداة للبحث العلمي والمصادر والمراجع ومشرف",
			description: "مشروع Zena AI أداة متطورة للبحث العلمي والمصادر والمراجع ومشرف أكاديمي ذكي قيد التطوير ضمن منظومة مشاريع Libyonics.",
			architectureTitle: "المعمارية المعرفية وشبكات المراجع",
			architectureText: "يعتمد النظام على خوارزميات متقدمة للربط الدلالي بين الأوراق العلمية، وتحليل شبكات الاقتباس البصري، وتنظيم المراجع الأكاديمية بدقة، مع وحدة متخصصة لمتابعة الإشراف على الأطروحات العلمية.",
			disclosureTitle: "إشعار الخصائص والاعتماد الأكاديمي",
			disclosureText: "المعايير المنهجية، وقواعد الربط مع المستودعات العلمية، وأدوات الإشراف الأكاديمي تخضع للمراجعة والتقييم قبل الإعلان عن النسخة التجريبية المعتمدة.",
			milestoneTitle: "المرحلة الحالية",
			milestoneState: "تطوير محرك شبكات الاقتباس ونظام لوحة متابعة المشرف الأكاديمي."
		},
		contact: {
			kicker: "قنوات التواصل",
			title: "التواصل المؤسسي",
			intro: "ترحب Libyonics بالحوار مع الشركاء التقنيين والمؤسسات الأكاديمية والمهتمين بتطوير المشاريع. يرجى إرسال استفساركم عبر النموذج المؤسسي المباشر.",
			form: {
				nameLabel: "الاسم الكامل",
				namePlaceholder: "أدخل الاسم الكريم",
				orgLabel: "المؤسسة أو الجهة",
				orgPlaceholder: "الشركة، الجامعة، أو العمل المستقل",
				emailLabel: "البريد الإلكتروني",
				emailPlaceholder: "name@organization.com",
				subjectLabel: "موضوع الاستفسار",
				subjectOptions: [
					"حوار مؤسسي عام",
					"استفسار بشأن مشروع غيث (جهاز)",
					"استفسار بشأن مشروع حجة | HAJJA",
					"استفسار بشأن مشروع Zena AI",
					"تعاون تقني وبحثي",
					"تمثيل مؤسسي وشراكات"
				],
				messageLabel: "نص الرسالة",
				messagePlaceholder: "يرجى كتابة تفاصيل الاستفسار أو مجال التعاون المقترح...",
				submit: "إرسال الاستفسار المؤسسي",
				submitting: "جارٍ الإرسال...",
				successTitle: "تم استلام الاستفسار بنجاح",
				successMessage: "نشكرك على تواصلك مع Libyonics. تم تسجيل استفسارك في سجل الاتصالات المؤسسية وسيقوم فريقنا بمراجعته بسرية والرد عند توفر التوافق.",
				reset: "إرسال استفسار آخر",
				confidentialityNote: "تُعامل جميع الرسائل بسرية تجارية تامة. نلتزم بعدم مشاركة بياناتكم أو إرسال أي رسائل ترويجية."
			}
		},
		footer: {
			aboutSummary: "Libyonics شركة تقنية تعمل على تطوير مشاريع نوعية مادية ورقمية بدقة معمارية ووضوح في الهدف وجودة في التنفيذ.",
			navigationTitle: "التنقل",
			projectsTitle: "المشاريع",
			standardsTitle: "المعايير",
			standardsText: "تصميم تحريري سويسري · إفصاحات معتمدة وموثوقة",
			copyright: "© ٢٠٢٦ Libyonics. جميع الحقوق محفوظة.",
			disclaimer: "تُنشر كافة المعلومات المتعلقة بالمشاريع وفقاً لحالتها التطويرية المعتمدة فقط."
		}
	}
};

export type ContentType = typeof content;
