import { property } from 'lit/decorators.js';
import {
    Element,
    type Direction,
    type IconVariant,
    type PaletteColor,
    type RelativeSizeOrFullWidth
} from '../../components-utils';
import styles from './styles';

export class BaseIcon extends Element {
    static styles = [styles];

    @property({ type: String }) color?: PaletteColor = 'text';
    @property({ type: String }) variant: IconVariant = 'filled';
    @property({ type: String }) size: RelativeSizeOrFullWidth = 'small';
    @property({ type: String }) direction: Direction = 'up';
    @property({ type: Boolean, attribute: 'no-animation' }) noAnimation: boolean = false;
}
