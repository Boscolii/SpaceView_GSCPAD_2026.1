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

<img width="368" height="775" alt="image" src="https://github.com/user-attachments/assets/6eac25e6-ae2b-4cad-a71b-c50a0aab8956" />
<img width="374" height="788" alt="image" src="https://github.com/user-attachments/assets/96096833-849a-422a-a8d6-cc803d364569" />

---

### Dashboard de Sensores

Monitoramento dos sensores da missão com gráficos históricos, valores máximos, mínimos, médias e tendências de comportamento.

<img width="378" height="727" alt="image" src="https://github.com/user-attachments/assets/51ae84bd-a05a-4ecf-8d36-edc6775554e9" />
<img width="369" height="663" alt="image" src="https://github.com/user-attachments/assets/56ba3937-217f-4b75-b7ad-a421a4732f4b" />
<img width="377" height="709" alt="image" src="https://github.com/user-attachments/assets/b78ba435-835d-4090-84f1-00dd7a86f8ca" />
<img width="374" height="481" alt="image" src="https://github.com/user-attachments/assets/dc999dd0-8533-4545-93e2-638a434d9c57" />




---

### Alertas

Sistema de alertas automáticos baseado em limites críticos configuráveis, além do histórico persistente de eventos da missão.

<img width="366" height="799" alt="image" src="https://github.com/user-attachments/assets/04aaff2c-f3a0-4fe5-a66e-81acdb65145c" />

---

### IA Preditiva

Módulo de análise inteligente responsável por interpretar os dados monitorados, identificar tendências e fornecer recomendações operacionais.

<img width="365" height="795" alt="image" src="https://github.com/user-attachments/assets/fe49d777-fdfc-4405-9435-a943ca6774e2" />

---

### Configurações

Formulário de configuração dos limites críticos de temperatura, bateria e comunicação com validação de dados e persistência local.

<img width="377" height="607" alt="image" src="https://github.com/user-attachments/assets/17cbd564-2c28-457a-90df-ecea4389d9a3" />

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
* [x] Sistema de classificação de risco da missão
* [x] Recomendações inteligentes para tomada de decisão

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

EX:

```bash
cd SpaceView_GSCPAD_2026.1
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npx expo start
```

Escaneie o QR Code utilizando o Expo Go para executar o aplicativo ou utilize emulador virtual.

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

[Clique aqui para direcionar para o video demonstrativo](https://youtube.com/shorts/K76VIysaRW4)

---

## Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos como parte da Global Solution 2026.1 da FIAP, na disciplina Cross-Platform Application Development.
