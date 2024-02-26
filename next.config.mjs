/**
 * @type {import('next').NextConfig}
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const withFonts = require('./next.config.common');
export default withFonts;
