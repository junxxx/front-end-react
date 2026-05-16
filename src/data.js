export const initialCommands = [
  {
    id: 1,
    title: "set http cli Proxy",
    command:
      "export http_proxy=http://127.0.0.1:8088;export https_proxy=http://127.0.0.1:8088;",
    category: "Proxy",
  },
  {
    id: 2,
    title: "unset http cli Proxy",
    command: "unset http_proxy;unset https_proxy",
    category: "Proxy",
  },
  {
    id: 3,
    title: "npm registry",
    command: "npm config set registry https://registry.npmmirror.com",
    category: "Registry",
  },
];
