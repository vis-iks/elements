import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeFormHelperDirective } from '../vscode-form-helper.directive';

const meta: Meta<VscodeFormHelperDirective> = {
  title: 'Components/Form Helper',
  component: VscodeFormHelperDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeFormHelperDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-form-helper>Form Helper</vscode-form-helper>',
  }),
};
