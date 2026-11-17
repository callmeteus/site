export interface StackItem {
    name: string;
    icon: string;
}

export interface StackGroup {
    id: string;
    label: string;
    highlight?: boolean;
    items: StackItem[];
}

export const stackGroups: StackGroup[] = [
    {
        id: "main",
        label: "Main stack",
        highlight: true,
        items: [
            { name: "TypeScript", icon: "si:typescript" },
            { name: "JavaScript", icon: "si:javascript" },
            { name: "PHP", icon: "si:php" },
            { name: "Java", icon: "si:openjdk" },
            { name: "Zig", icon: "si:zig" },
            { name: "Rust", icon: "si:rust" },
            { name: "Scala", icon: "si:scala" },
            { name: "Go", icon: "si:go" },
            { name: "Python", icon: "si:python" },
            { name: "C / C++", icon: "si:cplusplus" },
            { name: "Lua", icon: "si:lua" },
            { name: "Kotlin", icon: "si:kotlin" },
            { name: "CLI", icon: "lucide:terminal" },
            { name: "AI", icon: "lucide:sparkles" },
        ],
    },
    {
        id: "infra",
        label: "Infrastructure & ops",
        items: [
            { name: "Docker", icon: "si:docker" },
            { name: "Docker Compose", icon: "si:docker" },
            { name: "nginx", icon: "si:nginx" },
            { name: "Traefik", icon: "si:traefikproxy" },
            { name: "PostgreSQL", icon: "si:postgresql" },
            { name: "Redis", icon: "si:redis" },
            { name: "Valkey", icon: "si:redis" },
            { name: "RabbitMQ", icon: "si:rabbitmq" },
            { name: "MySQL", icon: "si:mysql" },
            { name: "MinIO", icon: "si:minio" },
            { name: "Ansible", icon: "si:ansible" },
            { name: "Kaniko", icon: "si:kaniko" },
            { name: "NetBird", icon: "lucide:shield-check" },
            { name: "Cloudflare", icon: "si:cloudflare" },
        ],
    },
    {
        id: "frontend",
        label: "Frontend",
        items: [
            { name: "React", icon: "si:react" },
            { name: "Vue", icon: "si:vuedotjs" },
            { name: "Astro", icon: "si:astro" },
            { name: "Tailwind CSS", icon: "si:tailwindcss" },
            { name: "daisyUI", icon: "si:daisyui" },
            { name: "Electron", icon: "si:electron" },
            { name: "React Native", icon: "si:react" },
            { name: "Expo", icon: "si:expo" },
            { name: "Capacitor", icon: "si:capacitor" },
        ],
    },
    {
        id: "backend",
        label: "Backend & data",
        items: [
            { name: "Node.js", icon: "si:nodedotjs" },
            { name: "Fastify", icon: "si:fastify" },
            { name: "Express", icon: "si:express" },
            { name: "Sequelize", icon: "si:sequelize" },
            { name: "SQLite", icon: "si:sqlite" },
            { name: "pgvector", icon: "si:postgresql" },
        ],
    },
    {
        id: "embedded",
        label: "Embedded & home lab",
        items: [
            { name: "ESP32", icon: "si:espressif" },
            { name: "ESP-IDF", icon: "si:espressif" },
            { name: "C", icon: "si:c" },
            { name: "Lua", icon: "si:lua" },
            { name: "MQTT", icon: "si:mqtt" },
            { name: "Zigbee2MQTT", icon: "si:zigbee" },
            { name: "Home Assistant", icon: "si:homeassistant" },
        ],
    },
    {
        id: "creative",
        label: "Creative tools",
        items: [
            { name: "VEGAS Pro", icon: "lucide:clapperboard" },
            { name: "FL Studio", icon: "lucide:music-2" },
            { name: "REAPER", icon: "lucide:audio-lines" },
        ],
    },
    {
        id: "tooling",
        label: "Observability & tooling",
        items: [
            { name: "Prometheus", icon: "si:prometheus" },
            { name: "OpenTelemetry", icon: "si:opentelemetry" },
            { name: "Vitest", icon: "si:vitest" },
            { name: "Playwright", icon: "si:playwright" },
            { name: "Vite", icon: "si:vite" },
            { name: "Zod", icon: "si:zod" },
        ],
    },
];

export const stackFilters = [
    { id: "all", label: "All" },
    { id: "main", label: "Main" },
    { id: "infra", label: "Infra" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "embedded", label: "Embedded" },
    { id: "creative", label: "Creative" },
    { id: "tooling", label: "Tooling" },
];
