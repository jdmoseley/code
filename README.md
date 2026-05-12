# Hello visitors👋,

# I have created a repository for sharing projects that include multi-language test frameworks that are currently centered around Playwright using JS, TS, and Python. The intent is mainly to explore the advantages of each framework and share insights.

📢 Note: This project is in progress and all the code for this project will be updated overtime, but not each sub area will receive equivalent attention at any one time, the it is my intent to select a set number of test types to use in each different framework.

# The Repo will be structured similar to the following in order to prevent/minimize cross-pollution of languages ...

repo-root/
│
├── playwright-python/
│   ├── tests/
│   ├── src/
│   ├── .venv/                # Python virtual environment (ignored by Git)
│   ├── requirements.txt
│   ├── pyproject.toml        # optional modern Python config
│   └── pytest.ini
│
├── playwright-js/
│   ├── tests/
│   ├── src/
│   ├── node_modules/         # JS dependencies (ignored by Git)
│   ├── package.json
│   └── playwright.config.js
│
├── playwright-ts/
│   ├── tests/
│   ├── src/
│   ├── node_modules/         # TS dependencies (ignored by Git)
│   ├── package.json
│   ├── tsconfig.json
│   └── playwright.config.ts
│
├── shared/
│   ├── utils/                # optional shared scripts (bash, python, js)
│   ├── configs/              # linting, formatting, commit hooks
│   └── docs/                 # architecture, onboarding, etc.
│
├── .gitignore
├── .editorconfig
├── README.md
└── .github/
    └── workflows/
        ├── python-tests.yml
        ├── js-tests.yml
        └── ts-tests.yml
