```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

    Note left of server: {content, date} sent to the server

    server-->>browser: 201 created
    deactivate server

    Note right of browser: updates notes list