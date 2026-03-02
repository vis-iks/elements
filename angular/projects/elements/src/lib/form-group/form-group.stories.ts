import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeFormGroupDirective } from '../vscode-form-group.directive';

const meta: Meta<VscodeFormGroupDirective> = {
  title: 'Components/Form Group',
  component: VscodeFormGroupDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeFormGroupDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-form-group>Form Group</vscode-form-group>',
  }),
};
