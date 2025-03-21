import { ModuleMetadata } from '@nestjs/common';

export interface IModule extends ModuleMetadata {
  customProperty?: string; // Thêm một thuộc tính tùy chỉnh
}
