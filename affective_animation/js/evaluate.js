function save_answer() {

    // story_expressive = Array.prototype.slice.call(d.getElementsByClassName('story_expressive'));
    // story_communicate = Array.prototype.slice.call(d.getElementsByClassName('story_communicate'));
    // story_vibe = Array.prototype.slice.call(d.getElementsByClassName('story_vibe'));
    // story_connect = Array.prototype.slice.call(d.getElementsByClassName('story_connect'));
    // engage_attention = Array.prototype.slice.call(d.getElementsByClassName('engage_attention'));
    // engage_fun = Array.prototype.slice.call(d.getElementsByClassName('engage_fun'));
    // engage_interest = Array.prototype.slice.call(d.getElementsByClassName('engage_interest'));
    // engage_enjoy = Array.prototype.slice.call(d.getElementsByClassName('engage_enjoy'));
    // engage_arousal = Array.prototype.slice.call(d.getElementsByClassName('engage_arousal'));
    // engage_aesthetic = Array.prototype.slice.call(d.getElementsByClassName('engage_aesthetics'));
    // engage_novel = Array.prototype.slice.call(d.getElementsByClassName('engage_novel'));
    // engage_like = Array.prototype.slice.call(d.getElementsByClassName('engage_like'));

    var subject = document.getElementById('subject').value;
    var category = document.getElementById('category').value;
    var trend;
    if (questions_shuffle[current_question]['vis'] == 'line') {
        trend = document.getElementById('trend').value
    } else {
        trend = '#'
    }

    var story_expressive = document.querySelector('input[name = "story_expressive"]:checked')
    var story_vibe = document.querySelector('input[name = "story_vibe"]:checked')
    var story_communicate = document.querySelector('input[name = "story_communicate"]:checked')
    var story_connect = document.querySelector('input[name = "story_connect"]:checked')

    var engage_attention = document.querySelector('input[name = "engage_attention"]:checked')
    var engage_fun = document.querySelector('input[name = "engage_fun"]:checked')
    var engage_interest = document.querySelector('input[name = "engage_interest"]:checked')
    var engage_enjoy = document.querySelector('input[name = "engage_enjoy"]:checked')
    var engage_arousal = document.querySelector('input[name = "engage_arousal"]:checked')
    var engage_aesthetic = document.querySelector('input[name = "engage_aesthetic"]:checked')
    var engage_novel = document.querySelector('input[name = "engage_novel"]:checked')
    var engage_like = document.querySelector('input[name = "engage_like"]:checked')


    if (subject != '' && category != '' && trend != '') {
        // console.log('write finished');
        if (story_expressive != null && story_vibe != null && story_communicate != null && story_connect != null) {
            // console.log('story finished');
            if (engage_attention != null && engage_fun != null && engage_interest != null && engage_enjoy != null && engage_arousal != null && engage_aesthetic != null && engage_novel != null && engage_like != null) {
                // console.log('all finished');
                new_answer = {
                    'id': questions_shuffle[current_question]['id'],
                    'src': questions_shuffle[current_question]['src'],
                    'vis': questions_shuffle[current_question]['vis'],
                    'story_id': questions_shuffle[current_question]['story_id'],
                    'topic': questions_shuffle[current_question]['topic'],
                    'tag': questions_shuffle[current_question]['tag'],
                    'affect': questions_shuffle[current_question]['affect'],
                    'animation': questions_shuffle[current_question]['animation'],
                    'subject': subject,
                    'category': category,
                    'trend': trend,
                    'story_expressive': story_expressive.value,
                    'story_vibe': story_vibe.value,
                    'story_communicate': story_communicate.value,
                    'story_connect': story_connect.value,
                    'engage_arousal': engage_arousal.value,
                    'engage_attention': engage_attention.value,
                    'engage_interest': engage_interest.value,
                    'engage_fun': engage_fun.value,
                    'engage_aesthetic': engage_aesthetic.value,
                    'engage_enjoy': engage_enjoy.value,
                    'engage_novel': engage_novel.value,
                    'engage_like': engage_like.value,
                }
                user_answers.push(new_answer)
                user_data['answers'] = user_answers
                if (current_question < questions_shuffle.length - 1) {
                    current_question++
                    gen_pic()
                } else {
                    init_survey()
                }
            } else {
                var error = document.createElement('div')
                error.innerHTML = 'Please answer all the questions'
                error.style.color = 'red'
                d.append(error)
            };
        } else {
            var error = document.createElement('div')
            error.innerHTML = 'Please answer all the questions'
            error.style.color = 'red'
            d.append(error)
        }
    } else {
        var error = document.createElement('div')
        error.innerHTML = 'Please answer all the questions'
        error.style.color = 'red'
        d.append(error)
    }

    // var counter = 0;

    // if (document.getElementById('subject').value != '' && document.getElementById('category').value != '' && document.getElementById('trend').value != '') {
    //     console.log('write finished');
    //     for (var e in story_expressive) {
    //         for (var v in story_vibe) {
    //             for (var c in story_connect) {
    //                 for (var cm in story_communicate) {
    //                     for (var n in engage_novel) {
    //                         for (var at in engage_attention) {
    //                             for (var ar in engage_arousal) {
    //                                 for (var it in engage_interest) {
    //                                     for (var en in engage_enjoy) {
    //                                         for (var l in engage_like) {
    //                                             for (var f in engage_fun) {
    //                                                 for (var a in engage_aesthetics) {
    //                                                     if (engage_novel[n].checked == true && engage_attention[at].checked == true && engage_arousal[ar].checked == true && engage_interest[it].checked == true && engage_fun[f].checked == true && engage_enjoy[en].checked == true && engage_like[l].checked == true && engage_aesthetics[a].checked == true && story_expressive[e].checked == true && story_vibe[v].checked == true && story_connect[c].checked == true && story_communicate[cm].checked == true) {
    //                                                         console.log('finished')
    //                                                         new_answer = {
    //                                                             'id': questions_shuffle[current_question]['id'],
    //                                                             'subject': document.getElementById('subject').value,
    //                                                             'category': document.getElementById('category').value,
    //                                                             // 'trend': document.getElementById('trend').value,
    //                                                             // 'story_expressive': story_expressive[e].value,
    //                                                             // 'story_vibe': story_vibe[v].value,
    //                                                             // 'story_communicate': story_communicate[cm].value,
    //                                                             // 'story_connect': story_connect[c].value,
    //                                                             // 'engage_arousal': engage_arousal[ar].value,
    //                                                             // 'engage_attention': engage_attention[at].value,
    //                                                             // 'engage_interest': engage_interest[it].value,
    //                                                             // 'engage_fun': engage_fun[f].value,
    //                                                             // 'engage_aesthetics': engage_attention[a].value,
    //                                                             // 'engage_enjoy': engage_enjoy[en].value,
    //                                                             // 'engage_novel': engage_enjoy[n].value,
    //                                                             // 'engage_like': engage_like[l].value,
    //                                                         }
    //                                                         user_answers.push(new_answer)
    //                                                         user_data['answers'] = user_answers
    //                                                         if (current_question < questions_shuffle.length - 1) {
    //                                                             current_question++
    //                                                             gen_pic()
    //                                                         } else {
    //                                                             init_survey()
    //                                                         }

    //                                                     } else {

    //                                                         counter++
    //                                                         if (counter == 5 * 5 * 5 * 5 * 5 * 5 * 5 * 5 * 5 * 5 * 5 * 5) {
    //                                                             var error = document.createElement('div')
    //                                                             error.innerHTML = 'Please answer all the questions'
    //                                                             error.style.color = 'red'
    //                                                             d.append(error)
    //                                                         }
    //                                                     }

    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // } else { console.log('pls answer all the questions') }

}


var evaluate = () => {
    document.body.innerHTML = ''
    d = document.createElement('div')
    text = '<p><strong>Evaluating the animation design</strong></p><br><p>Please recall the story and answer the following questions:</p>'
    d.innerHTML = text
    d.style.textAlign = 'left'
    d.style.margin = '2%'
    document.body.append(d)

    d.innerHTML += '<br><p><strong>- What is the chart about? Please write down the basic subject of the chart briefly.</strong></p><br>'
    textarea = document.createElement('textarea')
    textarea.id = "subject"
    textarea.style.width = "500px"
    textarea.style.height = "25px"
    d.append(textarea)


    d.innerHTML += '<br><br><p><strong>- How is the chart organized? Please write down the displayed categories and values as much as possible.</strong></p><br>'
    textarea_2 = document.createElement('textarea')
    textarea_2.id = "category"
    textarea_2.style.width = "500px"
    textarea_2.style.height = "50px"
    d.append(textarea_2)

    if (questions_shuffle[current_question]['vis'] == 'line') {
        d.innerHTML += '<br><br><p><strong>- What is the basic trend of the chart?</strong></p><br>'
        textarea_3 = document.createElement('textarea')
        textarea_3.id = "trend"
        textarea_3.style.width = "500px"
        textarea_3.style.height = "25px"
        d.append(textarea_3)
    }


    // -----------------story judge 1--------------------
    d.innerHTML += '<br><br><p><strong>- I think the animation makes the story emotionally expressive.</strong></p><br>'

    for (var i = 1; i < 6; i++) {
        choice = document.createElement("span");
        choice.style.display = "inline-block";
        choice.style.width = "100px";
        choice.style.height = "20px";
        choice.style.textAlign = "center";
        r1 = document.createElement("input");
        r1.type = "radio";
        r1.name = "story_expressive";
        r1.className = "r1 story_expressive";
        r1.value = i;
        l1 = document.createElement("label");
        l1.for = i;
        l1.innerHTML = i;
        l1.className = "l1";
        choice.append(r1);
        choice.append(l1);
        d.append(choice)
    }

    d.innerHTML += '<br>'

    likert = document.createElement('span');
    likert.style.lineHeight = "20px";
    d.append(likert);


    for (i of['Strongly disagree', 'Disagree', 'Neither agree nor disagree', 'Agree', 'Strongly agree']) {
        scale = document.createElement('span')
        scale.style.display = "inline-block";
        scale.style.width = "100px";
        scale.style.verticalAlign = "top";
        scale.style.textAlign = "center";
        scale.innerHTML = i
        likert.append(scale)
    }

    // -----------------story judge 2--------------------
    d.innerHTML += '<br><br><p><strong>- I think the animation helps create a story vibe.</strong></p><br>'


    for (var i = 1; i < 6; i++) {
        choice = document.createElement("span");
        choice.style.display = "inline-block";
        choice.style.width = "100px";
        choice.style.height = "20px";
        choice.style.textAlign = "center";
        r1 = document.createElement("input");
        r1.type = "radio";
        r1.name = "story_vibe";
        r1.className = "r1 story_vibe";
        r1.value = i;
        l1 = document.createElement("label");
        l1.for = i;
        l1.innerHTML = i;
        l1.className = "l1";
        choice.append(r1);
        choice.append(l1);
        d.append(choice)
    }

    d.innerHTML += '<br>'

    likert = document.createElement('span');
    likert.style.lineHeight = "20px";
    d.append(likert);


    for (i of['Strongly disagree', 'Disagree', 'Neither agree nor disagree', 'Agree', 'Strongly agree']) {
        scale = document.createElement('span')
        scale.style.display = "inline-block";
        scale.style.width = "100px";
        scale.style.verticalAlign = "top";
        scale.style.textAlign = "center";
        scale.innerHTML = i
        likert.append(scale)
    }

    // -----------------story judge 3--------------------
    d.innerHTML += '<br><br><p><strong>- I think this animation helps the storyteller deliver the messages that he/she wants to communicate.</strong></p><br>'


    for (var i = 1; i < 6; i++) {
        choice = document.createElement("span");
        choice.style.display = "inline-block";
        choice.style.width = "100px";
        choice.style.height = "20px";
        choice.style.textAlign = "center";
        r1 = document.createElement("input");
        r1.type = "radio";
        r1.name = "story_communicate";
        r1.className = "r1 story_communicate";
        r1.value = i;
        l1 = document.createElement("label");
        l1.for = i;
        l1.innerHTML = i;
        l1.className = "l1";
        choice.append(r1);
        choice.append(l1);
        d.append(choice)
    }

    d.innerHTML += '<br>'

    likert = document.createElement('span');
    likert.style.lineHeight = "20px";
    d.append(likert);


    for (i of['Strongly disagree', 'Disagree', 'Neither agree nor disagree', 'Agree', 'Strongly agree']) {
        scale = document.createElement('span')
        scale.style.display = "inline-block";
        scale.style.width = "100px";
        scale.style.verticalAlign = "top";
        scale.style.textAlign = "center";
        scale.innerHTML = i
        likert.append(scale)
    }

    // -----------------story judge 4--------------------
    d.innerHTML += '<br><br><p><strong>- I think the animation makes me feel more connected with the story content.</strong></p><br>'


    for (var i = 1; i < 6; i++) {
        choice = document.createElement("span");
        choice.style.display = "inline-block";
        choice.style.width = "100px";
        choice.style.height = "20px";
        choice.style.textAlign = "center";
        r1 = document.createElement("input");
        r1.type = "radio";
        r1.name = "story_connect";
        r1.className = "r1 story_connect";
        r1.value = i;
        l1 = document.createElement("label");
        l1.for = i;
        l1.innerHTML = i;
        l1.className = "l1";
        choice.append(r1);
        choice.append(l1);
        d.append(choice)
    }

    d.innerHTML += '<br>'

    likert = document.createElement('span');
    likert.style.lineHeight = "20px";
    d.append(likert);


    for (i of['Strongly disagree', 'Disagree', 'Neither agree nor disagree', 'Agree', 'Strongly agree']) {
        scale = document.createElement('span')
        scale.style.display = "inline-block";
        scale.style.width = "100px";
        scale.style.verticalAlign = "top";
        scale.style.textAlign = "center";
        scale.innerHTML = i
        likert.append(scale)
    }


    // -----------------engage judge 1--------------------
    d.innerHTML += '<br><br><p><strong>- I think the animation holds my attention.</strong></p><br>'


    for (var i = 1; i < 6; i++) {
        choice = document.createElement("span");
        choice.style.display = "inline-block";
        choice.style.width = "100px";
        choice.style.height = "20px";
        choice.style.textAlign = "center";
        r1 = document.createElement("input");
        r1.type = "radio";
        r1.name = "engage_attention";
        r1.className = "r1 engage_attention";
        r1.value = i;
        l1 = document.createElement("label");
        l1.for = i;
        l1.innerHTML = i;
        l1.className = "l1";
        choice.append(r1);
        choice.append(l1);
        d.append(choice)
    }

    d.innerHTML += '<br>'

    likert = document.createElement('span');
    likert.style.lineHeight = "20px";
    d.append(likert);


    for (i of['Strongly disagree', 'Disagree', 'Neither agree nor disagree', 'Agree', 'Strongly agree']) {
        scale = document.createElement('span')
        scale.style.display = "inline-block";
        scale.style.width = "100px";
        scale.style.verticalAlign = "top";
        scale.style.textAlign = "center";
        scale.innerHTML = i
        likert.append(scale)
    }

    // -----------------engage judge 2--------------------
    d.innerHTML += '<br><br><p><strong>- I think the animation is fun.</strong></p><br>'


    for (var i = 1; i < 6; i++) {
        choice = document.createElement("span");
        choice.style.display = "inline-block";
        choice.style.width = "100px";
        choice.style.height = "20px";
        choice.style.textAlign = "center";
        r1 = document.createElement("input");
        r1.type = "radio";
        r1.name = "engage_fun";
        r1.className = "r1 engage_fun";
        r1.value = i;
        l1 = document.createElement("label");
        l1.for = i;
        l1.innerHTML = i;
        l1.className = "l1";
        choice.append(r1);
        choice.append(l1);
        d.append(choice)
    }

    d.innerHTML += '<br>'

    likert = document.createElement('span');
    likert.style.lineHeight = "20px";
    d.append(likert);


    for (i of['Strongly disagree', 'Disagree', 'Neither agree nor disagree', 'Agree', 'Strongly agree']) {
        scale = document.createElement('span')
        scale.style.display = "inline-block";
        scale.style.width = "100px";
        scale.style.verticalAlign = "top";
        scale.style.textAlign = "center";
        scale.innerHTML = i
        likert.append(scale)
    }

    // -----------------engage judge 3--------------------
    d.innerHTML += '<br><br><p><strong>- I think the animation interests me.</strong></p><br>'


    for (var i = 1; i < 6; i++) {
        choice = document.createElement("span");
        choice.style.display = "inline-block";
        choice.style.width = "100px";
        choice.style.height = "20px";
        choice.style.textAlign = "center";
        r1 = document.createElement("input");
        r1.type = "radio";
        r1.name = "engage_interest";
        r1.className = "r1 engage_interest";
        r1.value = i;
        l1 = document.createElement("label");
        l1.for = i;
        l1.innerHTML = i;
        l1.className = "l1";
        choice.append(r1);
        choice.append(l1);
        d.append(choice)
    }

    d.innerHTML += '<br>'

    likert = document.createElement('span');
    likert.style.lineHeight = "20px";
    d.append(likert);


    for (i of['Strongly disagree', 'Disagree', 'Neither agree nor disagree', 'Agree', 'Strongly agree']) {
        scale = document.createElement('span')
        scale.style.display = "inline-block";
        scale.style.width = "100px";
        scale.style.verticalAlign = "top";
        scale.style.textAlign = "center";
        scale.innerHTML = i
        likert.append(scale)
    }

    // -----------------engage judge 4--------------------
    d.innerHTML += '<br><br><p><strong>- I think the animation is enjoyable.</strong></p><br>'


    for (var i = 1; i < 6; i++) {
        choice = document.createElement("span");
        choice.style.display = "inline-block";
        choice.style.width = "100px";
        choice.style.height = "20px";
        choice.style.textAlign = "center";
        r1 = document.createElement("input");
        r1.type = "radio";
        r1.name = "engage_enjoy";
        r1.className = "r1 engage_enjoy";
        r1.value = i;
        l1 = document.createElement("label");
        l1.for = i;
        l1.innerHTML = i;
        l1.className = "l1";
        choice.append(r1);
        choice.append(l1);
        d.append(choice)
    }

    d.innerHTML += '<br>'

    likert = document.createElement('span');
    likert.style.lineHeight = "20px";
    d.append(likert);


    for (i of['Strongly disagree', 'Disagree', 'Neither agree nor disagree', 'Agree', 'Strongly agree']) {
        scale = document.createElement('span')
        scale.style.display = "inline-block";
        scale.style.width = "100px";
        scale.style.verticalAlign = "top";
        scale.style.textAlign = "center";
        scale.innerHTML = i
        likert.append(scale)
    }

    // -----------------engage judge 5--------------------
    d.innerHTML += '<br><br><p><strong>- I was emotionally aroused by the animation.</strong></p><br>'


    for (var i = 1; i < 6; i++) {
        choice = document.createElement("span");
        choice.style.display = "inline-block";
        choice.style.width = "100px";
        choice.style.height = "20px";
        choice.style.textAlign = "center";
        r1 = document.createElement("input");
        r1.type = "radio";
        r1.name = "engage_arousal";
        r1.className = "r1 engage_arousal";
        r1.value = i;
        l1 = document.createElement("label");
        l1.for = i;
        l1.innerHTML = i;
        l1.className = "l1";
        choice.append(r1);
        choice.append(l1);
        d.append(choice)
    }

    d.innerHTML += '<br>'

    likert = document.createElement('span');
    likert.style.lineHeight = "20px";
    d.append(likert);


    for (i of['Strongly disagree', 'Disagree', 'Neither agree nor disagree', 'Agree', 'Strongly agree']) {
        scale = document.createElement('span')
        scale.style.display = "inline-block";
        scale.style.width = "100px";
        scale.style.verticalAlign = "top";
        scale.style.textAlign = "center";
        scale.innerHTML = i
        likert.append(scale)
    }

    // -----------------engage judge 6--------------------
    d.innerHTML += '<br><br><p><strong>- I think the animation is aesthetically appealing.</strong></p><br>'


    for (var i = 1; i < 6; i++) {
        choice = document.createElement("span");
        choice.style.display = "inline-block";
        choice.style.width = "100px";
        choice.style.height = "20px";
        choice.style.textAlign = "center";
        r1 = document.createElement("input");
        r1.type = "radio";
        r1.name = "engage_aesthetic";
        r1.className = "r1 engage_aesthetic";
        r1.value = i;
        l1 = document.createElement("label");
        l1.for = i;
        l1.innerHTML = i;
        l1.className = "l1";
        choice.append(r1);
        choice.append(l1);
        d.append(choice)
    }

    d.innerHTML += '<br>'

    likert = document.createElement('span');
    likert.style.lineHeight = "20px";
    d.append(likert);


    for (i of['Strongly disagree', 'Disagree', 'Neither agree nor disagree', 'Agree', 'Strongly agree']) {
        scale = document.createElement('span')
        scale.style.display = "inline-block";
        scale.style.width = "100px";
        scale.style.verticalAlign = "top";
        scale.style.textAlign = "center";
        scale.innerHTML = i
        likert.append(scale)
    }

    // -----------------engage judge 7--------------------
    d.innerHTML += '<br><br><p><strong>- I think the animation is novel.</strong></p><br>'


    for (var i = 1; i < 6; i++) {
        choice = document.createElement("span");
        choice.style.display = "inline-block";
        choice.style.width = "100px";
        choice.style.height = "20px";
        choice.style.textAlign = "center";
        r1 = document.createElement("input");
        r1.type = "radio";
        r1.name = "engage_novel";
        r1.className = "r1 engage_novel";
        r1.value = i;
        l1 = document.createElement("label");
        l1.for = i;
        l1.innerHTML = i;
        l1.className = "l1";
        choice.append(r1);
        choice.append(l1);
        d.append(choice)
    }

    d.innerHTML += '<br>'

    likert = document.createElement('span');
    likert.style.lineHeight = "20px";
    d.append(likert);


    for (i of['Strongly disagree', 'Disagree', 'Neither agree nor disagree', 'Agree', 'Strongly agree']) {
        scale = document.createElement('span')
        scale.style.display = "inline-block";
        scale.style.width = "100px";
        scale.style.verticalAlign = "top";
        scale.style.textAlign = "center";
        scale.innerHTML = i
        likert.append(scale)
    }




    // -----------------engage judge 7--------------------
    d.innerHTML += '<br><br><p><strong>- I like the animation.</strong></p><br>'


    for (var i = 1; i < 6; i++) {
        choice = document.createElement("span");
        choice.style.display = "inline-block";
        choice.style.width = "100px";
        choice.style.height = "20px";
        choice.style.textAlign = "center";
        r1 = document.createElement("input");
        r1.type = "radio";
        r1.name = "engage_like";
        r1.className = "r1 engage_like";
        r1.value = i;
        l1 = document.createElement("label");
        l1.for = i;
        l1.innerHTML = i;
        l1.className = "l1";
        choice.append(r1);
        choice.append(l1);
        d.append(choice)
    }

    d.innerHTML += '<br>'

    likert = document.createElement('span');
    likert.style.lineHeight = "20px";
    d.append(likert);


    for (i of['Strongly disagree', 'Disagree', 'Neither agree nor disagree', 'Agree', 'Strongly agree']) {
        scale = document.createElement('span')
        scale.style.display = "inline-block";
        scale.style.width = "100px";
        scale.style.verticalAlign = "top";
        scale.style.textAlign = "center";
        scale.innerHTML = i
        likert.append(scale)
    }


    // -----------button------------
    btn = document.createElement('button')
    if (current_question < questions_shuffle.length - 1) btn.innerHTML = 'Next'
    else btn.innerHTML = 'End Test'
        // btn.innerHTML = 'Next Question'
    btn.className = 'button f_button'
    btn.onclick = () => {
        save_answer()
    }
    document.body.append(btn)
}