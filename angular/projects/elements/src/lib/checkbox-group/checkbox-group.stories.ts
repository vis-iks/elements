import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeCheckboxGroupDirective } from '../vscode-checkbox-group.directive';

const meta: Meta<VscodeCheckboxGroupDirective> = {
  title: 'Components/Checkbox Group',
  component: VscodeCheckboxGroupDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeCheckboxGroupDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-checkbox-group>Checkbox Group</vscode-checkbox-group>',
  }),
};
