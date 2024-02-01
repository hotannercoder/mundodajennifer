function disable_subsequent_click() {
  const sign_in_button = document.getElementById("sign_in");
  if (sign_in_button != null) {
    setTimeout("sign_in_button.disabled = false;", 60000);
    sign_in_button.disabled = true;
  }

  return true;
}

function update_form_action_from_headers(form) {
  disable_subsequent_click();
  const _request = new XMLHttpRequest();
  const url =
    "https://n15.network-auth.com/MIAP-V/hi/AYNPXcp/login?continue_url=CONTINUE_URL_PLACEHOLDER";
  _request.open("HEAD", window.location, true);
  _request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  _request.onreadystatechange = function () {
    if (_request.readyState === 4) {
      const continue_url = _request.getResponseHeader("Continue-Url");
      form.action = url.replace("CONTINUE_URL_PLACEHOLDER", continue_url);
      form.submit();
    }
  };
  _request.send(null);
  return false;
}

function restart_button() {
  document.forms["restart_form"].submit();
}



//<form id="sign_in_form" onsubmit="javascript:return update_form_action_from_headers(document.getElementById(&quot;sign_in_form&quot;));" action="https://n15.network-auth.com/MIAP-V/hi/AYNPXcp/login?continue_url=https%3A%2F%2Fwww.google.com" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" 