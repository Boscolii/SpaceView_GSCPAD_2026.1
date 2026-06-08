# SpaceView

### Global Solution 2026.1 — Cross-Platform Application Development | FIAP

---

## Descrição

O SpaceView é uma aplicação mobile desenvolvida em React Native e Expo para monitoramento inteligente de uma missão espacial simulada. A plataforma acompanha dados de temperatura, energia, comunicação e estabilidade orbital em tempo real, gerando alertas automáticos e análises preditivas para apoiar a tomada de decisão. O diferencial da solução está na combinação entre dashboards analíticos, sistema de alertas inteligentes e módulo de previsão baseado em tendências operacionais.

---

## Equipe

| Nome          | RM       |
| ------------- | -------- |
| Henrique Boscoli | RM563651 |
| Joao Henrique | RM562161 |
| Tomazzo Canterucci | RM565566 |

---

## Telas do Aplicativo

### Home — Dashboard Principal

Visão geral da missão espacial contendo status operacional, indicadores principais e acesso às funcionalidades do sistema.

---

### Dashboard de Sensores

Monitoramento dos sensores da missão com gráficos históricos, valores máximos, mínimos, médias e tendências de comportamento.

---

### Alertas

Sistema de alertas automáticos baseado em limites críticos configuráveis, além do histórico persistente de eventos da missão.

---

### IA Preditiva

Módulo de análise inteligente responsável por interpretar os dados monitorados, identificar tendências e fornecer recomendações operacionais.

---

### Configurações

Formulário de configuração dos limites críticos de temperatura, bateria e comunicação com validação de dados e persistência local.

---

## Funcionalidades

* [x] Dashboard com indicadores em tempo real (simulado)
* [x] Dashboard analítico com gráficos históricos
* [x] Cálculo de máximos, mínimos e médias
* [x] Sistema de alertas automáticos por limiar crítico
* [x] Histórico persistente de alertas
* [x] Limpeza de histórico de alertas
* [x] Persistência de configurações com AsyncStorage
* [x] Navegação com Expo Router
* [x] Context API para gerenciamento global do estado
* [x] Formulário de configuração com validação
* [x] Tendências operacionais dos sensores
* [x] Módulo de análise preditiva
* [x] Classificação de risco da missão (baixo, médio e alto)

---

## Tecnologias

* React Native
* Expo
* Expo Router
* JavaScript
* Context API
* AsyncStorage
* React Native Gifted Charts
* Expo Vector Icons

---

## Como Executar

### Pré-requisitos

* Node.js instalado
* Expo CLI

```bash
npm install -g expo-cli
```

* Expo Go instalado no dispositivo Android ou iOS

### Instalação

Clone o repositório:

```bash
git clone https://github.com/Boscolii/SpaceView_GSCPAD_2026.1.git
```

Acesse a pasta do projeto:

```bash
cd SpaceView
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npx expo start
```

Escaneie o QR Code utilizando o Expo Go para executar o aplicativo.

---

## Arquitetura do Projeto

```text
app/
├── (tabs)/
│   ├── _layout.js
│   ├── alerts.js
│   ├── index.js
│   ├── prediction.js
│   └── sensors.js
│
├── _layout.js
└── config.js

src/
├── components/
│   ├── AlertCard.js
│   ├── MetricCard.js
│   ├── MissionRiskCard.js
│   ├── MissionStatusCard.js
│   ├── PredictionCard.js
│   ├── ProgressMetric.js
│   ├── SensorChart.js
│   └── StatsCard.js
│
├── context/
│   └── MissionContext.js
│
├── services/
│   └── simulator.js
│
└── storage/
    └── missionStorage.js

assets/
scripts/
```


---

## Vídeo de Demonstração



---

## Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos como parte da Global Solution 2026.1 da FIAP, na disciplina Cross-Platform Application Development.
