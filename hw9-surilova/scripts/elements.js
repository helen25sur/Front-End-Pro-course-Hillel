 const allElements = {
 container: {
  tagName: "div",
  listClasses: ["container"],

  form: {
   tagName: "form",
   listClasses: ["main-form"],

   containerRow: {
    tagName: "div",
    listClasses: ["row", "valign-wrapper"],

    inputField: {
     tagName: "div",
     listClasses: ["input-field", "col", "s9"],

     inputFullName: {
      tagName: "input",
      listClasses: ["validate"],
      placeholder: "Введите Ваше имя",
      id: "full_name",
      type: "text",
     },

     label: {
      tagName: "label",
      listClasses: ["label"],
      textContent: "Имя пользователя",
     },
    },

    containerButton: {
     tagName: "div",
     listClasses: ["col", "s3"],

     buttonSubmit: {
      tagName: "button",
      listClasses: [
       "waves-effect",
       "waves-light",
       "btn",
       "green",
       "darken-3",
      ],
      textContent: "Отправить",
      type: "submit",
      name: "action",

      iconForSubmit: {
       tagName: "i",
       listClasses: ["material-icons", "right"],
       textContent: "send",
      },
     },
    },
   },
  },
  containerInner: {
   tagName: "div",
   listClasses: ["row"],

   containerColl: {
    tagName: "div",
    listClasses: ["col", "s12"],

    listUsers: {
     tagName: "ul",
     listClasses: ["collection"],

     listItem: {
      tagName: "li",
      listClasses: ["collection-item"],

      buttonEdit: {
       tagName: "a",
       listClasses: [
        "waves-effect",
        "waves-light",
        "green",
        "lighten-1",
        "btn-small",
        "right",
       ],
       textContent: "Редактировать",

       iconEdit: {
        tagName: "i",
        listClasses: ["material-icons", "right"],
        textContent: "edit",
       },
      },

      buttonDelete: {
       tagName: "a",
       listClasses: [
        "waves-effect",
        "waves-light",
        "red",
        "lighten-2",
        "btn-small",
        "right",
       ],
       textContent: "Удалить",

       iconEdit: {
        tagName: "i",
        listClasses: ["material-icons", "right"],
        textContent: "delete",
       },
      },
     },
    },
   },
  },
 },
};
