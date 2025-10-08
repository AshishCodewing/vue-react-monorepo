import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

type Props = {
  containerId: string;
  onChange?: (data: any) => void;
}

function render({ containerId, onChange }: Props) {
  const container = document.getElementById(containerId);
  if (!container) return;

  createRoot(container).render(<App onChange={onChange} />);
}

// Export as default object for UMD build
export default { render };
