import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeScrollableDirective } from '../vscode-scrollable.directive';

const meta: Meta<VscodeScrollableDirective> = {
  title: 'Components/Scrollable',
  component: VscodeScrollableDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeScrollableDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-scrollable>Scrollable</vscode-scrollable>',
  }),
};
