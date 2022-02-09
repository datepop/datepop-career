import { NotionRenderer } from 'react-notion-x';
import AppHeader from './Navbar/index';

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for collection views (optional)
import 'rc-dropdown/assets/index.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'



const NotionPage = ({ navbar, recordMap }) => (
    <NotionRenderer
      header={() => <AppHeader navbar={navbar} />}
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
    />
  )
export default NotionPage;