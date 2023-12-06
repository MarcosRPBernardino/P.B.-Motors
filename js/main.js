$(document).ready(function () {

    $('#carousel-imagens').slick({
        autoplay: true,
    });


    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = $(this.hash);
        var headerHeight = $('header').outerHeight();

        $('html, body').animate({
            scrollTop: target.offset().top - headerHeight
        }, 1000);
    });


    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })


    $('#telefone').mask('(00) 00000-0000')


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            telefone: 'Por favor, insira o seu telefone como no exemplo (00) 12345-1234.',
            email: 'Por favor, insira o seu email como no exemplo abc@exemplo.com.',
            veiculoDeInteresse: 'Por favor, coloque o nome ou o número de referência do seu veículo de interesse.',
            mensagem: 'Por favor, insira a sua mensagem.'
        },
        submitHandler: function (form) {
            console.log(form)
            form.submit();
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }

        }

    });

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const veiculoInteresse = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(veiculoInteresse);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)

    })
})

