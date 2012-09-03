function load_qa_exp()
 {
 $(document).ready(function()
        {
            $('.qa_block').remove();
            $.ajax(
            {
                type: "GET",
                url: "Experience_QA.xml",
                dataType: "xml",
                success: function(xml)
                {
                    $(xml).find('qa_block').each(
                        function()
                        {
                            var question = $(this).find('question').text(),
                                answer = $(this).find('answer').text();
                            $('<div class="qa_block"></div>').html('<div class="question">' + question + '</div><div class="answer">' + answer + '</div>').appendTo('.qa_list');
                        }
                    )
                }
                
            })
        })
 };