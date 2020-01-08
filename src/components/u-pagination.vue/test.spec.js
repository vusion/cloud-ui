import Pagination from './index';
import { createVM, createWrapVM } from '~/test/utils';

describe('Pagination', () => {
    let pagination;

    it('total', () => {
        pagination = createVM(Pagination, { total: 0 });
        expect(pagination.pages.join(',')).to.equal('');

        pagination = createVM(Pagination, { total: 1 });
        expect(pagination.pages.join(',')).to.equal('1');

        pagination = createVM(Pagination, { total: 4 });
        expect(pagination.pages.join(',')).to.equal('1,2,3,4');

        pagination = createVM(Pagination);
        expect(pagination.pages.pop()).to.equal(11);
    });

    it('page', (done) => {
        pagination = createVM(Pagination);
        expect(pagination.currentPage).to.equal(1);

        pagination = createVM(Pagination, { page: 6 });
        expect(pagination.currentPage).to.equal(6);

        const vm = createWrapVM(Pagination, { page: 6 });
        pagination = vm.$refs.child;
        expect(pagination.currentPage).to.be.equal(6);

        vm.page = 10;
        setTimeout(() => {
            expect(pagination.currentPage).to.equal(10);
            done();
        });
    });

    it('side', () => {
        // 0
        pagination = createVM(Pagination, { side: 0 });
        expect(pagination.pages.join(',')).to.equal('1,2,3,4,5,');

        pagination.currentPage = 6;
        expect(pagination.pages.join(',')).to.equal(',4,5,6,7,8,');

        pagination.currentPage = 10;
        expect(pagination.pages.join(',')).to.equal(',7,8,9,10,11');

        // 1
        pagination = createVM(Pagination, { side: 1 });
        expect(pagination.pages.join(',')).to.equal('1,2,3,4,5,,11');

        pagination.currentPage = 6;
        expect(pagination.pages.join(',')).to.equal('1,,4,5,6,7,8,,11');

        pagination.currentPage = 10;
        expect(pagination.pages.join(',')).to.equal('1,,7,8,9,10,11');

        // 2
        pagination = createVM(Pagination);
        expect(pagination.pages.join(',')).to.equal('1,2,3,4,5,,10,11');

        pagination.currentPage = 6;
        expect(pagination.pages.join(',')).to.equal('1,2,,4,5,6,7,8,,10,11');

        pagination.currentPage = 10;
        expect(pagination.pages.join(',')).to.equal('1,2,,7,8,9,10,11');
    });

    it('around', () => {
        // 1
        pagination = createVM(Pagination, { around: 1 });
        expect(pagination.pages.join(',')).to.equal('1,2,,10,11');

        pagination.currentPage = 6;
        expect(pagination.pages.join(',')).to.equal('1,2,,6,,10,11');

        pagination.currentPage = 9;
        expect(pagination.pages.join(',')).to.equal('1,2,,9,10,11');

        // 2
        pagination = createVM(Pagination, { around: 2 });
        expect(pagination.pages.join(',')).to.equal('1,2,,10,11');

        pagination.currentPage = 6;
        expect(pagination.pages.join(',')).to.equal('1,2,,5,6,,10,11');

        pagination.currentPage = 9;
        expect(pagination.pages.join(',')).to.equal('1,2,,8,9,10,11');

        // 3
        pagination = createVM(Pagination, { around: 3 });
        expect(pagination.pages.join(',')).to.equal('1,2,3,,10,11');

        pagination.currentPage = 6;
        expect(pagination.pages.join(',')).to.equal('1,2,,5,6,7,,10,11');

        pagination.currentPage = 10;
        expect(pagination.pages.join(',')).to.equal('1,2,,9,10,11');

        // 4
        pagination = createVM(Pagination, { around: 4 });
        expect(pagination.pages.join(',')).to.equal('1,2,3,4,,10,11');

        pagination.currentPage = 6;
        expect(pagination.pages.join(',')).to.equal('1,2,,4,5,6,7,,10,11');

        pagination.currentPage = 10;
        expect(pagination.pages.join(',')).to.equal('1,2,,8,9,10,11');

        // 5
        pagination = createVM(Pagination);
        expect(pagination.pages.join(',')).to.equal('1,2,3,4,5,,10,11');

        pagination.currentPage = 6;
        expect(pagination.pages.join(',')).to.equal('1,2,,4,5,6,7,8,,10,11');

        pagination.currentPage = 10;
        expect(pagination.pages.join(',')).to.equal('1,2,,7,8,9,10,11');

        // around > total
        pagination = createVM(Pagination, { total: 3 });
        expect(pagination.pages.join(',')).to.equal('1,2,3');

        pagination.currentPage = 3;
        expect(pagination.pages.join(',')).to.equal('1,2,3');
    });

    it('pages', () => {
        pagination = createVM(Pagination);
        expect(pagination.pages.join(',')).to.equal('1,2,3,4,5,,10,11');

        pagination.currentPage = 5;
        expect(pagination.pages.join(',')).to.equal('1,2,3,4,5,6,7,,10,11');

        pagination.currentPage = 8;
        expect(pagination.pages.join(',')).to.equal('1,2,,6,7,8,9,10,11');

        pagination.currentPage = 10;
        expect(pagination.pages.join(',')).to.equal('1,2,,7,8,9,10,11');
    });

    it('readonly || disabled', () => {
        pagination = createVM(Pagination, { disabled: true });

        pagination.select(4);
        expect(pagination.currentPage).to.equal(1);
    });

    it('select(page)', () => {
        pagination = createVM(Pagination);

        pagination.select(4);
        expect(pagination.currentPage).to.equal(4);

        pagination.select(13);
        expect(pagination.currentPage).to.equal(4);
    });

    it('@before-select', () => {
        pagination = createVM(Pagination);

        let $event;
        pagination.$once('before-select', (e) => $event = e);
        pagination.select(7);
        expect($event.page).to.equal(7);
        expect($event.oldPage).to.equal(1);

        pagination.$once('before-select', (e) => e.preventDefault());
        pagination.select(4);
        expect(pagination.currentPage).to.equal(7);
    });

    it('@select', () => {
        pagination = createVM(Pagination);

        let $event;
        pagination.$once('select', (e) => $event = e);
        pagination.select(7);
        expect($event.page).to.equal(7);
        expect($event.oldPage).to.equal(1);
    });

    it('@change', (done) => {
        pagination = createVM(Pagination);

        let $event;
        pagination.$on('change', (e) => $event = e);
        pagination.select(7);

        setTimeout(() => {
            expect($event.page).to.equal(7);
            expect($event.oldPage).to.equal(1);

            pagination.currentPage = 2;
            setTimeout(() => {
                expect($event.page).to.equal(2);
                expect($event.oldPage).to.equal(7);
                done();
            });
        });
    });
});
