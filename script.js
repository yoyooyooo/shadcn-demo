function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
// from https://ui.shadcn.com/blocks/login#login-03
import { GalleryVerticalEnd } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function LoginPage() {
  return (
    /*#__PURE__*/
    // `dark` for dark mode
    // themes: zinc, slate, stone, gray, neutral, red, rose, orange, green, blue, yellow, violet
    _jsx("div", {
      className: "theme-violet custom",
      children: /*#__PURE__*/_jsx("div", {
        className: "flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10",
        children: /*#__PURE__*/_jsxs("div", {
          className: "flex w-full max-w-sm flex-col gap-6",
          children: [/*#__PURE__*/_jsxs("a", {
            href: "#",
            className: "flex items-center gap-2 self-center font-medium text-foreground",
            children: [/*#__PURE__*/_jsx("div", {
              className: "flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground",
              children: /*#__PURE__*/_jsx(GalleryVerticalEnd, {
                className: "size-4"
              })
            }), "Acme Inc."]
          }), /*#__PURE__*/_jsx(LoginForm, {})]
        })
      })
    })
  );
}
function LoginForm(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
    className: cn('flex flex-col gap-6', className)
  }, props), {}, {
    children: [/*#__PURE__*/_jsxs(Card, {
      children: [/*#__PURE__*/_jsxs(CardHeader, {
        className: "text-center",
        children: [/*#__PURE__*/_jsx(CardTitle, {
          className: "text-xl",
          children: "Welcome back"
        }), /*#__PURE__*/_jsx(CardDescription, {
          children: "Login with your Apple or Google account"
        })]
      }), /*#__PURE__*/_jsx(CardContent, {
        children: /*#__PURE__*/_jsx("form", {
          children: /*#__PURE__*/_jsxs("div", {
            className: "grid gap-6",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex flex-col gap-4",
              children: [/*#__PURE__*/_jsxs(Button, {
                variant: "outline",
                className: "w-full",
                children: [/*#__PURE__*/_jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/_jsx("path", {
                    d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701",
                    fill: "currentColor"
                  })
                }), "Login with Apple"]
              }), /*#__PURE__*/_jsxs(Button, {
                variant: "outline",
                className: "w-full",
                children: [/*#__PURE__*/_jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  children: /*#__PURE__*/_jsx("path", {
                    d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
                    fill: "currentColor"
                  })
                }), "Login with Google"]
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: "relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border",
              children: /*#__PURE__*/_jsx("span", {
                className: "relative z-10 bg-background px-2 text-muted-foreground",
                children: "Or continue with"
              })
            }), /*#__PURE__*/_jsxs("div", {
              className: "grid gap-6",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "grid gap-2",
                children: [/*#__PURE__*/_jsx(Label, {
                  htmlFor: "email",
                  children: "Email"
                }), /*#__PURE__*/_jsx(Input, {
                  id: "email",
                  type: "email",
                  placeholder: "m@example.com",
                  required: true
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "grid gap-2",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex items-center",
                  children: [/*#__PURE__*/_jsx(Label, {
                    htmlFor: "password",
                    children: "Password"
                  }), /*#__PURE__*/_jsx("a", {
                    href: "#",
                    className: "ml-auto text-sm underline-offset-4 hover:underline",
                    children: "Forgot your password?"
                  })]
                }), /*#__PURE__*/_jsx(Input, {
                  id: "password",
                  type: "password",
                  required: true
                })]
              }), /*#__PURE__*/_jsx(Button, {
                type: "submit",
                className: "w-full",
                children: "Login"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "text-center text-sm",
              children: ["Don't have an account?", ' ', /*#__PURE__*/_jsx("a", {
                href: "#",
                className: "underline underline-offset-4",
                children: "Sign up"
              })]
            })]
          })
        })
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ",
      children: ["By clicking continue, you agree to our ", /*#__PURE__*/_jsx("a", {
        href: "#",
        children: "Terms of Service"
      }), ' ', "and ", /*#__PURE__*/_jsx("a", {
        href: "#",
        children: "Privacy Policy"
      }), "."]
    })]
  }));
}