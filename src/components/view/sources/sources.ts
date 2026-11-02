import './sources.css';
import { SourceItem } from '../../../types';
class Sources {
    public draw(data: SourceItem[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        if (!sourceItemTemp) {
            return;
        }

        data.forEach((item) => {
            if (!(sourceItemTemp instanceof HTMLTemplateElement)) {
                return;
            }
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            if (item.id) {
                (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
