import {shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    })


    test('debe de hacer match con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()
    })

    test('hw debe de tener el valor por defecto "Counter"', () => {
        const h2 = wrapper.find('h2')
        expect(h2.exists()).toBeTruthy()
        expect(h2.text()).toBe('Counter')
    })

    test('el valor por defecto debe de ser 100 en el p', () => {
        const pValue = wrapper.find('[data-test-id="counter"]')

        expect(pValue.exists()).toBeTruthy()

        expect(pValue.text()).toBe('100')
    })

    test('debe de incrementar en 1 el valor del contador', async () => {

        const increaseBtn = wrapper.find('button')

        await increaseBtn.trigger('click')

        const pValue = wrapper.find('[data-test-id="counter"]')

        expect(pValue.text()).toBe('101')
    })

    test('debe de decrementar en 2 el valor del contador', async () => {
        const [_, decreaseBtn] = wrapper.findAll('button')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const pValue = wrapper.find('[data-test-id="counter"]')

        expect(pValue.text()).toBe('98')
    })

    test('debe mostrar valor por defecto', () => {
        const {start} = wrapper.props()
        const value = wrapper.find('[data-test-id="counter"]').text()

        expect(Number(value)).toBe(start)
    })

    test('debe de mostrar la prop title', () => {
        const title = 'Hola Mundo!!!!!!'

        const wrapper = shallowMount( Counter, {
            props: {
                title,

            }
        })


        expect( wrapper.find( 'h2' ).text() ).toBe( title )
    })
})

