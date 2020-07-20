(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var tabsContent = document.querySelectorAll('.team__tabs__item'),
    bullet = document.querySelectorAll('.pagination__items'),
    bulletParent = document.querySelector('.team__pagination');

function hideContent() {
  tabsContent.forEach(function (item) {
    item.style.display = 'none';
  });
  bullet.forEach(function (item) {
    item.classList.remove('pagination__items--active');
  });
}

function showContent(i) {
  tabsContent[i].style.display = 'block';
  bullet[i].classList.add('pagination__items--active');
}

hideContent();
showContent(0);
bulletParent.addEventListener('click', function () {
  var target = event.target;

  if (target && target.classList.contains('pagination__items')) {
    bullet.forEach(function (item, i) {
      if (target === item) {
        hideContent();
        showContent(i);
      }
    });
  }
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9Cb3VuY3kvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBUSxXQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLG1CQUExQixDQUF0QjtBQUFBLElBQ1EsTUFBTSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixvQkFBMUIsQ0FEakI7QUFBQSxJQUVRLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGdkI7O0FBSUksU0FBUyxXQUFULEdBQXdCO0FBQ3BCLEVBQUEsV0FBVyxDQUFDLE9BQVosQ0FBcUIsVUFBQSxJQUFJLEVBQUk7QUFDekIsSUFBQSxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsR0FBcUIsTUFBckI7QUFDSCxHQUZEO0FBR0EsRUFBQSxNQUFNLENBQUMsT0FBUCxDQUFlLFVBQUEsSUFBSSxFQUFJO0FBQ25CLElBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmLENBQXNCLDJCQUF0QjtBQUNILEdBRkQ7QUFHSDs7QUFDRCxTQUFTLFdBQVQsQ0FBc0IsQ0FBdEIsRUFBeUI7QUFDckIsRUFBQSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUsS0FBZixDQUFxQixPQUFyQixHQUErQixPQUEvQjtBQUNBLEVBQUEsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVLFNBQVYsQ0FBb0IsR0FBcEIsQ0FBd0IsMkJBQXhCO0FBRUg7O0FBQ0QsV0FBVztBQUNYLFdBQVcsQ0FBRSxDQUFGLENBQVg7QUFDQSxZQUFZLENBQUMsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBTTtBQUM3QyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBckI7O0FBQ0EsTUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsbUJBQTFCLENBQWQsRUFBOEQ7QUFDMUQsSUFBQSxNQUFNLENBQUMsT0FBUCxDQUFpQixVQUFDLElBQUQsRUFBTyxDQUFQLEVBQWE7QUFDMUIsVUFBSSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNqQixRQUFBLFdBQVc7QUFDWCxRQUFBLFdBQVcsQ0FBRSxDQUFGLENBQVg7QUFDSDtBQUNKLEtBTEQ7QUFNSDtBQUNKLENBVkciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0ICAgdGFic0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVhbV9fdGFic19faXRlbScpLFxyXG4gICAgICAgIGJ1bGxldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdpbmF0aW9uX19pdGVtcycpLFxyXG4gICAgICAgIGJ1bGxldFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZWFtX19wYWdpbmF0aW9uJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZUNvbnRlbnQgKCkge1xyXG4gICAgICAgIHRhYnNDb250ZW50LmZvckVhY2ggKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnVsbGV0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncGFnaW5hdGlvbl9faXRlbXMtLWFjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvd0NvbnRlbnQgKGkpIHtcclxuICAgICAgICB0YWJzQ29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBidWxsZXRbaV0uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbl9faXRlbXMtLWFjdGl2ZScpO1xyXG5cclxuICAgIH1cclxuICAgIGhpZGVDb250ZW50ICgpO1xyXG4gICAgc2hvd0NvbnRlbnQgKDApO1xyXG4gICAgYnVsbGV0UGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdpbmF0aW9uX19pdGVtcycpKSB7XHJcbiAgICAgICAgYnVsbGV0LmZvckVhY2ggKCAoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlQ29udGVudCAoKTtcclxuICAgICAgICAgICAgICAgIHNob3dDb250ZW50IChpKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7Il0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p3Y205cVpXTjBjeTlDYjNWdVkza3ZjM0pqTDJwekwyRndjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPMEZEUVVFc1NVRkJVU3hYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETEdkQ1FVRlVMRU5CUVRCQ0xHMUNRVUV4UWl4RFFVRjBRanRCUVVGQkxFbEJRMUVzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4blFrRkJWQ3hEUVVFd1FpeHZRa0ZCTVVJc1EwRkVha0k3UVVGQlFTeEpRVVZSTEZsQlFWa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGMVFpeHRRa0ZCZGtJc1EwRkdka0k3TzBGQlNVa3NVMEZCVXl4WFFVRlVMRWRCUVhkQ08wRkJRM0JDTEVWQlFVRXNWMEZCVnl4RFFVRkRMRTlCUVZvc1EwRkJjVUlzVlVGQlFTeEpRVUZKTEVWQlFVazdRVUZEZWtJc1NVRkJRU3hKUVVGSkxFTkJRVU1zUzBGQlRDeERRVUZYTEU5QlFWZ3NSMEZCY1VJc1RVRkJja0k3UVVGRFNDeEhRVVpFTzBGQlIwRXNSVUZCUVN4TlFVRk5MRU5CUVVNc1QwRkJVQ3hEUVVGbExGVkJRVUVzU1VGQlNTeEZRVUZKTzBGQlEyNUNMRWxCUVVFc1NVRkJTU3hEUVVGRExGTkJRVXdzUTBGQlpTeE5RVUZtTEVOQlFYTkNMREpDUVVGMFFqdEJRVU5JTEVkQlJrUTdRVUZIU0RzN1FVRkRSQ3hUUVVGVExGZEJRVlFzUTBGQmMwSXNRMEZCZEVJc1JVRkJlVUk3UVVGRGNrSXNSVUZCUVN4WFFVRlhMRU5CUVVNc1EwRkJSQ3hEUVVGWUxFTkJRV1VzUzBGQlppeERRVUZ4UWl4UFFVRnlRaXhIUVVFclFpeFBRVUV2UWp0QlFVTkJMRVZCUVVFc1RVRkJUU3hEUVVGRExFTkJRVVFzUTBGQlRpeERRVUZWTEZOQlFWWXNRMEZCYjBJc1IwRkJjRUlzUTBGQmQwSXNNa0pCUVhoQ08wRkJSVWc3TzBGQlEwUXNWMEZCVnp0QlFVTllMRmRCUVZjc1EwRkJSU3hEUVVGR0xFTkJRVmc3UVVGRFFTeFpRVUZaTEVOQlFVTXNaMEpCUVdJc1EwRkJPRUlzVDBGQk9VSXNSVUZCZFVNc1dVRkJUVHRCUVVNM1F5eE5RVUZOTEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJja0k3TzBGQlEwRXNUVUZCU1N4TlFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExGTkJRVkFzUTBGQmFVSXNVVUZCYWtJc1EwRkJNRUlzYlVKQlFURkNMRU5CUVdRc1JVRkJPRVE3UVVGRE1VUXNTVUZCUVN4TlFVRk5MRU5CUVVNc1QwRkJVQ3hEUVVGcFFpeFZRVUZETEVsQlFVUXNSVUZCVHl4RFFVRlFMRVZCUVdFN1FVRkRNVUlzVlVGQlNTeE5RVUZOTEV0QlFVc3NTVUZCWml4RlFVRnhRanRCUVVOcVFpeFJRVUZCTEZkQlFWYzdRVUZEV0N4UlFVRkJMRmRCUVZjc1EwRkJSU3hEUVVGR0xFTkJRVmc3UVVGRFNEdEJRVU5LTEV0QlRFUTdRVUZOU0R0QlFVTktMRU5CVmtjaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaWdwZTJaMWJtTjBhVzl1SUhJb1pTeHVMSFFwZTJaMWJtTjBhVzl1SUc4b2FTeG1LWHRwWmlnaGJsdHBYU2w3YVdZb0lXVmJhVjBwZTNaaGNpQmpQVndpWm5WdVkzUnBiMjVjSWowOWRIbHdaVzltSUhKbGNYVnBjbVVtSm5KbGNYVnBjbVU3YVdZb0lXWW1KbU1wY21WMGRYSnVJR01vYVN3aE1DazdhV1lvZFNseVpYUjFjbTRnZFNocExDRXdLVHQyWVhJZ1lUMXVaWGNnUlhKeWIzSW9YQ0pEWVc1dWIzUWdabWx1WkNCdGIyUjFiR1VnSjF3aUsya3JYQ0luWENJcE8zUm9jbTkzSUdFdVkyOWtaVDFjSWsxUFJGVk1SVjlPVDFSZlJrOVZUa1JjSWl4aGZYWmhjaUJ3UFc1YmFWMDllMlY0Y0c5eWRITTZlMzE5TzJWYmFWMWJNRjB1WTJGc2JDaHdMbVY0Y0c5eWRITXNablZ1WTNScGIyNG9jaWw3ZG1GeUlHNDlaVnRwWFZzeFhWdHlYVHR5WlhSMWNtNGdieWh1Zkh4eUtYMHNjQ3h3TG1WNGNHOXlkSE1zY2l4bExHNHNkQ2w5Y21WMGRYSnVJRzViYVYwdVpYaHdiM0owYzMxbWIzSW9kbUZ5SUhVOVhDSm1kVzVqZEdsdmJsd2lQVDEwZVhCbGIyWWdjbVZ4ZFdseVpTWW1jbVZ4ZFdseVpTeHBQVEE3YVR4MExteGxibWQwYUR0cEt5c3BieWgwVzJsZEtUdHlaWFIxY200Z2IzMXlaWFIxY200Z2NuMHBLQ2tpTENKamIyNXpkQ0FnSUhSaFluTkRiMjUwWlc1MElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MblJsWVcxZlgzUmhZbk5mWDJsMFpXMG5LU3hjY2x4dUlDQWdJQ0FnSUNCaWRXeHNaWFFnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdWNHRm5hVzVoZEdsdmJsOWZhWFJsYlhNbktTeGNjbHh1SUNBZ0lDQWdJQ0JpZFd4c1pYUlFZWEpsYm5RZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWRHVmhiVjlmY0dGbmFXNWhkR2x2YmljcE8xeHlYRzVjY2x4dUlDQWdJR1oxYm1OMGFXOXVJR2hwWkdWRGIyNTBaVzUwSUNncElIdGNjbHh1SUNBZ0lDQWdJQ0IwWVdKelEyOXVkR1Z1ZEM1bWIzSkZZV05vSUNocGRHVnRJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJTNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oyNXZibVVuTzF4eVhHNGdJQ0FnSUNBZ0lIMHBPMXh5WEc0Z0lDQWdJQ0FnSUdKMWJHeGxkQzVtYjNKRllXTm9LR2wwWlcwZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBkR1Z0TG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvSjNCaFoybHVZWFJwYjI1ZlgybDBaVzF6TFMxaFkzUnBkbVVuS1R0Y2NseHVJQ0FnSUNBZ0lDQjlLVHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR1oxYm1OMGFXOXVJSE5vYjNkRGIyNTBaVzUwSUNocEtTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdGaWMwTnZiblJsYm5SYmFWMHVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZGliRzlqYXljN1hISmNiaUFnSUNBZ0lDQWdZblZzYkdWMFcybGRMbU5zWVhOelRHbHpkQzVoWkdRb0ozQmhaMmx1WVhScGIyNWZYMmwwWlcxekxTMWhZM1JwZG1VbktUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JvYVdSbFEyOXVkR1Z1ZENBb0tUdGNjbHh1SUNBZ0lITm9iM2REYjI1MFpXNTBJQ2d3S1R0Y2NseHVJQ0FnSUdKMWJHeGxkRkJoY21WdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDZ3BJRDArSUh0Y2NseHVJQ0FnSUdOdmJuTjBJSFJoY21kbGRDQTlJR1YyWlc1MExuUmhjbWRsZER0Y2NseHVJQ0FnSUdsbUlDaDBZWEpuWlhRZ0ppWWdkR0Z5WjJWMExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25jR0ZuYVc1aGRHbHZibDlmYVhSbGJYTW5LU2tnZTF4eVhHNGdJQ0FnSUNBZ0lHSjFiR3hsZEM1bWIzSkZZV05vSUNnZ0tHbDBaVzBzSUdrcElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSaGNtZGxkQ0E5UFQwZ2FYUmxiU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHbGtaVU52Ym5SbGJuUWdLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemFHOTNRMjl1ZEdWdWRDQW9hU2s3SUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlYSEpjYm4wcE95SmRmUT09In0=
