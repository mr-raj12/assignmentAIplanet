# PDF Question Answering Application

This application allows users to upload PDF documents and ask questions about their content. The system uses natural language processing to analyze the documents and provide relevant answers.

## Features

- PDF document upload and management
- Question answering based on document content
- Intuitive user interface
- Real-time processing and responses

## Tech Stack

### Frontend
- React.js with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API requests
- React Dropzone for file uploads
- Lucide React for icons

### Backend
- FastAPI (Python)
- LangChain for NLP processing
- SQLite for database
- PyPDF for PDF text extraction
- OpenAI embeddings for document processing

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- Python (v3.9+)
- OpenAI API key

### Frontend Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Set up your OpenAI API key in the `.env` file:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
5. Start the backend server:
   ```
   uvicorn main:app --reload
   ```

## API Documentation

### Endpoints

- `POST /upload` - Upload a PDF document
- `GET /documents` - Get all uploaded documents
- `GET /documents/{document_id}` - Get a specific document
- `POST /ask` - Ask a question about a document

## Project Structure

```
├── backend/
│   ├── main.py              # FastAPI application
│   ├── database.py          # Database configuration
│   ├── models.py            # Data models
│   ├── pdf_processor.py     # PDF processing and QA logic
│   └── requirements.txt     # Python dependencies
├── src/
│   ├── components/          # React components
│   │   ├── FileUpload.tsx   # Document upload component
│   │   ├── DocumentView.tsx # Document viewing and QA component
│   │   ├── Header.tsx       # Application header
│   │   └── Sidebar.tsx      # Application sidebar
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
└── README.md                # Project documentation
```

## Usage

1. Open the application in your browser
2. Upload a PDF document using the upload page
3. Once the document is processed, you can ask questions about its content
4. The system will analyze the document and provide relevant answers

## Notes

- The application uses OpenAI's embeddings for document processing, so an OpenAI API key is required
- Large documents may take longer to process
- The quality of answers depends on the clarity and structure of the uploaded documents