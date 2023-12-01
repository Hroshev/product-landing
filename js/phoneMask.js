window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call(document.querySelectorAll('#phone'), function(input) {
      let keyCode;
      let previousValue = ""; // Добавляем переменную для хранения предыдущего значения

      function mask(event) {
          event.keyCode && (keyCode = event.keyCode);
          let pos = this.selectionStart;
          if (pos < 3) event.preventDefault();
          let matrix = "+38 (___) ___ ____",
              i = 0,
              def = matrix.replace(/\D/g, ""),
              val = this.value.replace(/\D/g, ""),
              new_value = matrix.replace(/[_\d]/g, function(a) {
                  return i < val.length ? val.charAt(i++) || def.charAt(i) : a
              });
          i = new_value.indexOf("_");
          if (i != -1) {
              i < 5 && (i = 3);
              new_value = new_value.slice(0, i)
          }
          let reg = matrix.substr(0, this.value.length).replace(/_+/g,
              function(a) {
                  return "\\d{1," + a.length + "}"
              }).replace(/[+()]/g, "\\$&");
          reg = new RegExp("^" + reg + "$");

          // Проверяем, нужно ли очищать поле
          if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
              this.value = new_value;

              // Устанавливаем курсор в конец ввода
              setCaretPosition(this, this.value.length);
          }

          // Обновляем предыдущее значение
          previousValue = this.value;
      }

      // Установка позиции курсора в конец ввода
      function setCaretPosition(elem, caretPos) {
          if (elem !== null) {
              if (elem.createTextRange) {
                  let range = elem.createTextRange();
                  range.move('character', caretPos);
                  range.select();
              } else {
                  if (elem.selectionStart) {
                      elem.focus();
                      elem.setSelectionRange(caretPos, caretPos);
                  } else {
                      elem.focus();
                  }
              }
          }
      }

      // Добавляем обработчик события focus
      input.addEventListener("focus", function() {
          // Устанавливаем начальную позицию выделения в конец ввода
          setCaretPosition(this, this.value.length);
      });

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", function(event) {
          // Если значение поля не изменилось, восстанавливаем предыдущее значение
          if (this.value === previousValue && document.activeElement !== this) {
              this.value = previousValue;
          }
      });

      input.addEventListener("keydown", mask, false);
  });
});