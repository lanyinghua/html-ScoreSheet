let printSomething = function () {
    let idarr=["name","id","nation","klass","mat","chi","eng","pro"];
    let infoarr=idarr.map(function (item) {
        return document.getElementById(item).value;
    });

    if (infoarr[0].length<4 && infoarr[0]!==""){//如果输入格式正确就会返回
        localStorage.studentarr=infoarr;
        let str = `学生${infoarr[0]}的成绩被添加`;
        alert(str);
    }else {//如果输入格式不正确
        alert('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）')
    }
};



let printscoresheet=function () {
    let infoarr=localStorage.studentarr.split(',');

    let newtr="<tr>"+
            "<td>"+infoarr[0]+"</td>"+
            "<td>"+infoarr[4]+"</td>"+
            "<td>"+infoarr[5]+"</td>"+
            "<td>"+infoarr[6]+"</td>"+
            "<td>"+infoarr[7]+"</td>"+
            "</tr>";
    $('#table').append(newtr);

};
